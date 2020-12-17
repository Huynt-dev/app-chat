import React, { useState, useEffect } from "react";
import {
  Contents,
  Wrapper,
  Wrapper2,
  HeaderPage,
  Chat,
  Time,
  Text,
  Box,
  InputChat,
} from "./style";
import { io } from "socket.io-client";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const HomePage = () => {
  const [chat, setChat] = useState();

  const messageSend = (e) => {
    e.preventDefault();

    setChat("");
  };

  const socket = io("http://localhost:9999");
  if (chat !== null) {
    socket.emit("send-data", chat);
  }

  return (
    <>
      <HeaderPage>
        <h1>ok la</h1>
        <div className="ok">
          <Avatar shape="square" size={50} icon={<UserOutlined />} />
          <p>Logout</p>
        </div>
      </HeaderPage>
      <Contents>
        <Wrapper>
          <Chat>
            <Box>
              <Text>asdasdasdasdas</Text>
              <Time>10:10</Time>
            </Box>
          </Chat>
          <Chat friend>
            <Box>
              <Text>asdasdasdasdas</Text>
              <Time>10:10</Time>
            </Box>
          </Chat>
        </Wrapper>
      </Contents>
      <Wrapper2 onSubmit={messageSend}>
        <InputChat
          placeholder="Say some thing"
          onChange={(e) => {
            setChat(e.target.value);
          }}
        />
      </Wrapper2>
    </>
  );
};

export default HomePage;
