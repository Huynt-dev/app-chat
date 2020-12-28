import { io } from "socket.io-client";

var socket = io("localhost:9999", {
  query: {
    token: localStorage.getItem("token"),
  },
});

const socketListener = () => {
  socket
    .on("connect", () => {
      console.log("connected");
    })
    .on("hello", ({ msg }) => {
      alert(msg);
    });
};

export { socket, socketListener };
