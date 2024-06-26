import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: null,
  ProductCart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};
export const productSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    productReducer: (state, action) => {
      state.product = action.payload;
    },
    filterProductReducer: (state, action) => {
      state.product = action.payload;
    },
    cartReducer: (state, action) => {
      let findIndex = state.ProductCart.findIndex(
        (item) => item.id == action.payload.id
      );
      if (findIndex == -1) {
        state.ProductCart = [...state.ProductCart, action.payload];
        localStorage.setItem("cart", JSON.stringify([...state.ProductCart]));
      } else {
        alert("This product is already added to the cart");
      }
    },
    removeProduct: (state, action) => {
      state.ProductCart.splice(action.payload.id, 1);
      localStorage.setItem("cart", JSON.stringify([...state.ProductCart]));
    },
    proudctquantityUpdate: (state, action) => {
      if (action.payload.actionname == "incrment") {
        state.ProductCart[action.payload.id].qun++;
        localStorage.setItem("cart", JSON.stringify([...state.ProductCart]));
      } else {
        state.ProductCart[action.payload.id].qun--;
        localStorage.setItem("cart", JSON.stringify([...state.ProductCart]));
      }
    },
  },
});

export const {
  productReducer,
  filterProductReducer,
  cartReducer,
  removeProduct,
  proudctquantityUpdate,
} = productSlice.actions;

export default productSlice.reducer;
