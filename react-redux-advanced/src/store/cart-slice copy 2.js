import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalAmount = state.totalAmount + newItem.price;
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title
        });
      }else{
          existingItem.quantity++;
          existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removerItemFromCart(state, action) {
        const id = action.payload;
        const existingItem = state.items.find((item) => item.id === id);
        state.totalAmount = state.totalAmount - existingItem.price;
        state.totalQuantity--;
        if(existingItem.quantity === 1){
            state.items = state.items.filter(item => item.id !== id)
        }else{
            existingItem.quantity--;
            existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
        }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
