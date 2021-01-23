import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Col, Input, Tooltip, Result } from "antd";
import { useParams } from "react-router-dom";
// import { SmileOutlined } from "@ant-design/icons";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { socket, socketListener } from "../../configs/socket";
import store from "../../store";
import {
  Contents,
  Wrapper,
  Wrapper2,
  Chat,
  Text,
  Box,
  InputChat,
} from "./style";

const ChatMain = () => {
  const params = useParams();
  const [chat, setChat] = useState("");
  const messages = useSelector((state) => state.rooms.message);
  const auth = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const time = <span>10:10</span>;

  useEffect(() => {
    socketListener(store);
  }, []);

  const notify = (text) => toast.info(text);

  const messageSend = (e) => {
    e.preventDefault();

    socket.emit("sendMessage", {
      room: params.id,
      user: auth._id,
      message: chat,
    });
    notify(chat);
    setChat("");
  };

  return (
    <Col flex="auto">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Contents>
        <Wrapper>
          {messages.map((x) => (
            <Chat friend={auth._id !== x.user._id} key={x._id}>
              <Tooltip placement="left" title={x.createdAt}>
                <Text>{x.user.name}</Text>
                <Box>
                  <Text>{x.message}</Text>
                </Box>
              </Tooltip>
            </Chat>
          ))}
        </Wrapper>
      </Contents>

      <Wrapper2 onSubmit={messageSend}>
        <InputChat
          onChange={(e) => {
            setChat(e.target.value);
          }}
          name="msg"
          value={chat}
          placeholder="Say some thing"
          autoComplete="off"
        />
      </Wrapper2>
    </Col>
  );
};

export default ChatMain;
