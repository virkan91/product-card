import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const counterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload)
    }
  },
});

export const { addToCart } = counterSlice.actions;

export default counterSlice.reducer;
