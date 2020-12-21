import React, { useState, useEffect } from "react";
import { Col, Row } from "antd";
import {
  Contents,
  Wrapper,
  Wrapper2,
  Chat,
  Time,
  Text,
  Box,
  InputChat,
} from "./style";
import { io } from "socket.io-client";

const HomePage = () => {
  const [chat, setChat] = useState();
  const [socket, setSocket] = useState(null);

  const messageSend = (e) => {
    e.preventDefault();
    socket.emit("data-chat", chat);
    setChat("");
  };

  useEffect(() => {
    console.log(localStorage.getItem("token"));
    var socketIO = io("localhost:9999", {
      extraHeaders: {
        Authorization: localStorage.getItem("token"),
      },
    });
    setSocket(socketIO);
  }, []);

  // console.log("render", socket);

  return (
    <Row gutter={[8, 8]}>
      <Col span={12}>Room</Col>
      <Col span={12}>
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
            name="msg"
            placeholder="Say some thing"
          />
        </Wrapper2>
      </Col>
    </Row>
  );
};

export default HomePage;
