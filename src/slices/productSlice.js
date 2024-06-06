import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value: null,
}
export const productSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    productReducer: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { productReducer } = productSlice.actions;

export default productSlice.reducer;
