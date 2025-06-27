import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartCount: 0,
  toaster: {
    show: false,
    message: "",
  },
  showDrawer: {
    content: "",
    title: "",
    width: "400px",
    show: false,
    addressData: {},
  },
  addressList: [],
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
    showDrawer(state, action) {
      return { ...state, showDrawer: action.payload };
    },
    addressList(state, action) {
      return { ...state, addressList: action.payload };
    },
  },
});

export const { cartQuantity, toaster, showDrawer, addressList } =
  commonSlice.actions;
export default commonSlice.reducer;
