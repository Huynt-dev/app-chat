import { io } from "socket.io-client";
import { setNewMessage } from "redux/rooms/reducer";

// debugger;
const localData = localStorage.getItem("persist:root");
const data = JSON.parse(localData) || {};
const { token } = JSON.parse(data.auth || null) || {};

var socket = io("localhost:9999", {
  query: {
    token: token,
  },
});

const socketListener = (store) => {
  socket.on("connect", () => {
    console.log("connected");
  });

  socket.on("newMessage", (data) => {
    console.log(data);
    store.dispatch(setNewMessage(data));
  });

  // socket.on("userBecomeOffline", ({ userId }) => {
  //   store.dispatch(setStatus("default"));
  // });

  // socket.on("userBecomeOnline", ({ userId }) => {
  //   store.dispatch(setStatus("success"));
  // });
};

export { socket, socketListener };
