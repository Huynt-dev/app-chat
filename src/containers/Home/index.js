import React, { useState, useEffect } from "react";
import { Col, Row, Input, Tooltip } from "antd";
import { socket, socketListener } from "../../configs/socket";
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

const user = JSON.parse(localStorage.getItem("user"));
const { Search } = Input;
const HomePage = () => {
  const [chat, setChat] = useState("");
  const [dataUser, setDataUser] = useState([]);
  const time = <span>10:10</span>;

  useEffect(() => {
    socketListener();
    socket.on("NEW-MESSAGE", (chat) => {
      setDataUser((pre) => [...pre, chat]);
    });
  }, []);

  const messageSend = (e) => {
    e.preventDefault();
    socket.emit("NEW-MESSAGE", chat);
    setChat("");
  };

  // console.log("render", socket);

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
                {console.log(x)}
                <Tooltip placement="left" title={time}>
                  <Text>{user.name}</Text>
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
            autocomplete="off"
          />
        </Wrapper2>
      </Col>
    </Row>
  );
};

export default HomePage;
