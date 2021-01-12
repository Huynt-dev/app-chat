import { io } from "socket.io-client";
import store from "../store";

var socket = io("localhost:9999", {
  query: {
    token: localStorage.getItem("token"),
  },
});

const socketListener = () => {
  socket.on("connect", () => {
    console.log("connected");
  });

  socket.on("userBecomeOffline", ({ userId }) => {
    store.dispatch({ type: "user/setOnlineStatus", payload: false });
  });

  socket.on("userBecomeOnline", ({ userId }) => {
    store.dispatch({ type: "user/setOnlineStatus", payload: true });
  });
  // .on("tokenSuccess", ({ msg }) => {
  //   alert(msg);
  // });
};

export { socket, socketListener };
