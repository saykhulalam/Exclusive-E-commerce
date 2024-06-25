import { createSlice } from "@reduxjs/toolkit";

const initialState={
    product: null,
    cart:localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
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
    cartReducer:(state, action)=>{
     state.cart = [...state.cart , action.payload];
     localStorage.setItem("cart" , JSON.stringify([...state.cart]))
    }
  },
});

export const { productReducer, filterProductReducer,cartReducer } = productSlice.actions;

export default productSlice.reducer;
