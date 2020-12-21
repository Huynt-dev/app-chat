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

const HomePage = () => {
  const [chat, setChat] = useState();

  const messageSend = (e) => {
    e.preventDefault();
    setChat(e);
  };

  const socket = io("http://localhost:9999");
  if (chat !== null) {
    socket.emit("send-data", chat);
  }

  return (
    <>
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
          onChange={(e) => {
            setChat(e.target.value);
          }}
          placeholder="Say some thing"
        />
      </Wrapper2>
    </>
  );
};

export default HomePage;
