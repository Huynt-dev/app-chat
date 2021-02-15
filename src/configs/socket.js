import { io } from "socket.io-client";
import { setNewMessage, setLastMessage } from "redux/rooms/reducer";
import { notification } from "antd";
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

  socket.on("updateMessage", (data) => {
    console.log(data);
    store.dispatch(setNewMessage(data.message));
    store.dispatch(
      setLastMessage({ message: data.message, idRoom: data.idRoom })
    );
  });

  socket.on("newMessage", (message) => {
    notification.open({
      message: "Notification Title",
      description: message.message,
      onClick: () => {
        console.log("Notification Clicked!");
      },
    });
  });

  // socket.on("userBecomeOffline", ({ userId }) => {
  //   store.dispatch(setStatus("default"));
  // });

  // socket.on("userBecomeOnline", ({ userId }) => {
  //   store.dispatch(setStatus("success"));
  // });
};

export { socket, socketListener };
