import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload.dataUsers;
    },
  },
});

export const { setUsers } = userReducer.actions;

export default userReducer.reducer;
