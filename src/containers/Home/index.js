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

  useEffect(() => {
    const socket = io("http://localhost:9999");
    if (chat !== null) {
      socket.emit("send-data", chat);
    }
  }, [chat]);

  return (
    <>
      <HeaderPage>
        <h1>ok la</h1>
      </HeaderPage>
      <Contents>
        <Wrapper>
          <Chat>
            <Box>
              <Text>asdasdasdasdas</Text>
              <Time>10:10</Time>
            </Box>
          </Chat>
          <Chat>
            <Box>
              <Text>asdasdasdasdas</Text>
              <Time>10:10</Time>
            </Box>
          </Chat>
          <Chat>
            <Box>
              <Text>asdasdasdasdas</Text>
              <Time>10:10</Time>
            </Box>
          </Chat>
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
      <Wrapper2>
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
