import { io } from "socket.io-client";
import { setNewMessage, setLastMessage } from "redux/rooms/reducer";
import { notification } from "antd";
import config from "../configs";
const localData = localStorage.getItem("persist:root");
const data = JSON.parse(localData) || {};
const { token } = JSON.parse(data.auth || null) || {};

var socket = io(config.REACT_APP_URL, {
  query: {
    token: token,
  },
});

const socketListener = (store) => {
  socket.on("connect", () => {
    socket.on("updateMessage", (data) => {
      store.dispatch(
        setNewMessage({
          message: data.message,
          newMessage: {
            isSeen: data.message.isSeen,
            room: data.message.room,
            user: data.message.user._id,
          },
        })
      );
      store.dispatch(
        setLastMessage({ message: data.message, idRoom: data.idRoom })
      );
    });

    socket.on("newMessage", (message) => {
      const key = "updatable";
      notification.open({
        key,
        message: "New message from " + message.user.name,
        description: message.message.substring(0, 35),
      });
    });
  });
};

export { socket, socketListener };
