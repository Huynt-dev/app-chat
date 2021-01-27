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
      console.log("set message");
      state.message = action.payload.message;
    },
    setNewMessage: (state, action) => {
      console.log("set new message");
      state.message.push(action.payload);
    },
  },
});

export const { setRoom, setMessage, setNewMessage } = roomReducer.actions;

export default roomReducer.reducer;
