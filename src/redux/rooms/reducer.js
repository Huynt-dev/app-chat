import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  room: [],
  countNewMessage: [],
  message: [],
  toUser: "",
};

const roomReducer = createSlice({
  name: "rooms",
  initialState,
  reducers: {
    setRoom: (state, action) => {
      state.room = action.payload.room;
      state.countNewMessage = action.payload.countNewMessage;
    },
    setMessage: (state, action) => {
      state.message = action.payload.message;
    },
    setNewMessage: (state, action) => {
      state.message.push(action.payload.message);
      state.countNewMessage.push(action.payload.newMessage);
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

      return { ...state, room: [...a] };
    },
    sendTo: (state, action) => {
      state.toUser = action.payload;
    },
    seen: (state, action) => {
      let a = state.message.map((item) => {
        // console.log("asdasdasd", item.toUser);
        if (item.room === action.payload.idRoom) {
          return {
            ...item,
            isSeen: true,
          };
        }
        return item;
      });

      let b = state.countNewMessage.map((item) => {
        // console.log("asdasdasd", item.toUser);
        if (
          item.room === action.payload.idRoom &&
          item.user === action.payload.toUser
        ) {
          return {
            ...item,
            isSeen: true,
          };
        }
        return item;
      });
      return { ...state, countNewMessage: [...b], message: [...a] };
    },
  },
});

export const {
  setRoom,
  setMessage,
  setNewMessage,
  setLastMessage,
  sendTo,
  seen,
} = roomReducer.actions;

export default roomReducer.reducer;
