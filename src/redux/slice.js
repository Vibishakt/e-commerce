import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartCount: 0,
  toaster: {
    show: false,
    message: "",
  },
};

const commonSlice = createSlice({
  name: "pvrShop",
  initialState,
  reducers: {
    cartQuantity(state, action) {
      return { ...state, cartCount: action.payload };
    },
    toaster(state, action) {
      return { ...state, toaster: action.payload };
    },
  },
});

export const { cartQuantity, toaster } = commonSlice.actions;
export default commonSlice.reducer;
