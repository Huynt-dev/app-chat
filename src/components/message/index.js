import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Col, Tooltip, Empty, Popover, Button } from "antd";
import { useParams } from "react-router-dom";
import { useSticky, useScrollToBottom } from "react-scroll-to-bottom";
import Emoji from "react-emoji-render";
import Picker from "emoji-picker-react";
import { socket } from "../../configs/socket";

import {
  Contents,
  Wrapper,
  Wrapper2,
  Chat,
  Text,
  Box,
  InputChat,
  Icon,
  EzChat,
  Send,
  Like,
  LikeAndSend,
} from "./style";

const ChatMain = () => {
  const params = useParams();
  const [chat, setChat] = useState("");
  const messages = useSelector((state) => state.rooms.message);
  const auth = useSelector((state) => state.auth.user);

  const [sticky] = useSticky();
  const scrollToBottom = useScrollToBottom();

  const onEmojiClick = (e, emojiObject) => {
    setChat(chat + emojiObject.emoji);
  };

  const messageSend = (e) => {
    e.preventDefault();

    socket.emit("sendMessage", {
      room: params.id,
      user: auth._id,
      message: chat,
    });
    setChat("");
  };

  return (
    <Col flex="auto">
      <Contents>
        <Wrapper>
          {!messages.length ? (
            <Empty description={false} />
          ) : (
            messages.map((x) => (
              <Chat friend={auth._id !== x.user._id} key={x._id}>
                <Tooltip placement="left" title={x.createdAt}>
                  <Text>{x.user.name}</Text>
                  <Box>
                    <Text>
                      <Emoji text={x.message} />
                    </Text>
                  </Box>
                </Tooltip>
              </Chat>
            ))
          )}
          {!sticky && (
            <button onClick={scrollToBottom}>
              Click me to scroll to bottom
            </button>
          )}
        </Wrapper>
      </Contents>

      <Wrapper2 onSubmit={messageSend}>
        <EzChat>
          <Popover
            placement="topLeft"
            content={<Picker onEmojiClick={onEmojiClick} />}
            trigger="click"
          >
            <Icon />
          </Popover>

          <InputChat
            bordered="false"
            onChange={(e) => {
              setChat(e.target.value);
            }}
            name="msg"
            value={chat}
            placeholder="Say some thing"
            autoComplete="off"
          />

          <LikeAndSend>{chat.length > 0 ? <Send /> : <Like />}</LikeAndSend>
        </EzChat>
      </Wrapper2>
    </Col>
  );
};

export default ChatMain;
