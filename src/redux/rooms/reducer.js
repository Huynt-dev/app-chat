import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  room: [],
  message: [],
  toUser: "",
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
      state.message.push(action.payload);
    },

    setLastMessage: (state, action) => {
      const a = state.room.map((item) => {
        if (item._id === action.payload.idRoom) {
          return {
            ...item,
            who: action.payload.message.user.name,
            lastMessage: action.payload.message.message,
          };
        }
        return item;
      });

      return { room: [...a], message: [...state.message] };
    },
    sendTo: (state, action) => {
      state.toUser = action.payload;
    },
  },
});

export const {
  setRoom,
  setMessage,
  setNewMessage,
  setLastMessage,
  sendTo,
} = roomReducer.actions;

export default roomReducer.reducer;
