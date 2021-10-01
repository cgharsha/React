import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartTotal = useSelector((state) => state.cart.totalAmount);

  const cartIsEmpty = cartItems.length <= 0;
  return (
    <Card className={classes.cart}>
      {!cartIsEmpty && <h2>Your Shopping Cart</h2>}
      {cartIsEmpty && <h2>Your Shopping Cart is Empty</h2>}
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id:item.id,
              title: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
        {!cartIsEmpty && <div>Total Amount: {cartTotal}</div>}
        
      </ul>
    </Card>
  );
};

export default Cart;
