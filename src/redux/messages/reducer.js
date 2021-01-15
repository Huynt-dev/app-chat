import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: [],
};

const messageReducer = createSlice({
  name: "messages",
  initialState,
  reducers: {
    setMessages: (state, action) => {
      state.message = action.payload.message;
    },
  },
});

export const { setMessages } = messageReducer.actions;

export default messageReducer.reducer;
