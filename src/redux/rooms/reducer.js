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
      state.message.push(action.payload.message);

      state.room.map((item) => {
        if (item._id !== action.payload.idRoom) return item;

        return { ...item, lastMessage: action.payload.message };
      });
    },
  },
});

export const { setRoom, setMessage, setNewMessage } = roomReducer.actions;

export default roomReducer.reducer;
