import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import userSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    allproduct: productSlice,
    userlogin: userSlice,
  },
});
