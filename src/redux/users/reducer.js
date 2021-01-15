import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  status: null,
};

const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload.dataUsers;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { setUsers, setStatus } = userReducer.actions;

export default userReducer.reducer;
