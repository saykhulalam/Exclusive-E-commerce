import { createSlice } from "@reduxjs/toolkit";

const initialState={
    product: null,
}
export const productSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    productReducer: (state, action) => {
      state.product = action.payload;
    },
    filterProductReducer: (state, action)=>{
      state.product = action.payload;
    },
  },
});

export const { productReducer, filterProductReducer } = productSlice.actions;

export default productSlice.reducer;
