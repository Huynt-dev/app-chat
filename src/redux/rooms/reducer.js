import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  room: [],
  message: [],
};

const roomReducer = createSlice({
  name: "rooms",
  initialState,
  reducers: {
    setRoom: (state, action) => {
      state.room = action.payload.room;
    },
    setMessage: (state, action) => {
      state.message = action.payload.message;
    },
    setNewMessage: (state, action) => {
      state.message.push(action.payload);
    },
  },
});

export const { setRoom, setMessage, setNewMessage } = roomReducer.actions;

export default roomReducer.reducer;
