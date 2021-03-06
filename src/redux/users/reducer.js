import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  userInfo: {},
};

const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    getInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { setUsers, getInfo } = userReducer.actions;

export default userReducer.reducer;
