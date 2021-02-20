import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  user: {},
};

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoginData: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    updateUser: (state, action) => {
      state.user.first_name = action.payload.data.firstName;
      state.user.last_name = action.payload.data.lastName;
    },
  },
});

export const { setLoginData, updateUser } = authReducer.actions;

export default authReducer.reducer;
