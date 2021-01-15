import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  user: {},
  isLoading: false,
};

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoginData: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
  },
});

export const { setLoginData } = authReducer.actions;

export default authReducer.reducer;
