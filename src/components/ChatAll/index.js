import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Col, Input, Tooltip, Result } from "antd";
import { SmileOutlined } from "@ant-design/icons";
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

// const user = JSON.parse(localStorage.getItem("user"));
const { Search } = Input;

const ChatMain = () => {
  const [chat, setChat] = useState("");
  // const token = useSelector((state) => state.auth.token);
  const [dataUser, setDataUser] = useState([]);
  const time = <span>10:10</span>;

  useEffect(() => {
    socketListener(store);
    socket.on("NEW-MESSAGE", (chat) => {
      setDataUser((pre) => [...pre, chat]);
    });
  }, []);

  const messageSend = (e) => {
    e.preventDefault();
    socket.emit("NEW-MESSAGE", chat);
    setChat("");
  };

  return (
    <Col flex="auto">
      <Contents>
        <Wrapper>
          {dataUser.map((x, i) => (
            <Chat key={i}>
              {console.log(x)}
              <Tooltip placement="left" title={time}>
                <Text>name</Text>
                <Box>
                  <Text>{x}</Text>
                  {/* <Time>10:10</Time> */}
                </Box>
              </Tooltip>
            </Chat>
          ))}
          {/* <Chat friend>
              <Box>
                <Text>asdasdasdasdas</Text>
                <Time>10:10</Time>
              </Box>
            </Chat> */}
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
