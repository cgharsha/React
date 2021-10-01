import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { fetchCartData, sendCartData } from "./store/cart-actions";
import { uiActions } from "./store/ui-slice";

let isInitial = true;

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [])

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if(cart.changed){
      dispatch(sendCartData(cart));
    }
    
  }, [cart, dispatch]);

  const closeHandler = () => {
    dispatch(uiActions.toggleNotification())
  }
  return (
    <React.Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
          onClose={closeHandler}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </React.Fragment>
  );
}

export default App;
