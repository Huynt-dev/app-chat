import React, { useState, useEffect } from "react";
import { Col, Row, Input } from "antd";

import {
  Contents,
  Wrapper,
  Wrapper2,
  Chat,
  Time,
  Text,
  Box,
  InputChat,
  Col1,
} from "./style";
import { io } from "socket.io-client";
const { Search } = Input;
const HomePage = () => {
  const [chat, setChat] = useState("");
  const [socket, setSocket] = useState({});
  const [dataUser, setDataUser] = useState([]);

  const messageSend = (e) => {
    e.preventDefault();
    socket.emit("data-chat", chat);
    setChat("");
  };

  useEffect(() => {
    //console.log(localStorage.getItem("token"));
    var socketIO = io("localhost:9999", {
      extraHeaders: {
        Authorization: localStorage.getItem("token"),
      },
    });
    socketIO.on("data-chat-user", (data) => {
      setDataUser((pre) => [...pre, data]);
    });

    setSocket(socketIO);
  }, []);

  // console.log("render", socket);

  const dataServerSend = {
    id: "xxxx",
    username: "xxx",
    message: "xxxyyy",
    created_at: "time",
  };

  return (
    <Row>
      <Col1 span={5}>
        <Search className="Search" placeholder="input search text" />
        <div className="room">
          <p>title room</p>
          <p>test</p>
        </div>
        <div className="room">
          <p>title Room 2</p>
          <p>testasdasdasdasd</p>
        </div>
      </Col1>
      <Col span={19}>
        <Contents>
          <Wrapper>
            {dataUser.map((x, i) => (
              <Chat key={i}>
                <Box>
                  <Text>{x}</Text>
                  <Time>10:10</Time>
                </Box>
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
          />
        </Wrapper2>
      </Col>
    </Row>
  );
};

export default HomePage;
