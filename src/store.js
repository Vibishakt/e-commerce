import { configureStore } from "@reduxjs/toolkit";
import commonReducer from "redux/slice";

export const store = configureStore({
  devTools: true,
  reducer: {
    pvrStore: commonReducer,
  },
});
