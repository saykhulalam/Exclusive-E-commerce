import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null,
  },
  reducers: {
    userloginInfo: (state, actions) => {
      state.value = actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { userloginInfo } = userSlice.actions;

export default userSlice.reducer;
