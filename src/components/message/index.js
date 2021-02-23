import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Col, Tooltip, Empty, Popover } from "antd";
import { useParams } from "react-router-dom";

import Emoji from "react-emoji-render";
import Picker from "emoji-picker-react";
import { socket } from "configs/socket";
import useDebounce from "helpers/useDebounce";

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

  const debounceChat = useDebounce(chat, 100);
  const debounceLike = useDebounce("👍", 1000);
  const textInput = useRef(null);
  const inputRef = () => {
    textInput.current.focus();
  };
  const onEmojiClick = (e, emojiObject) => {
    setChat(chat + emojiObject.emoji);
  };

  const messageSend = (e) => {
    e.preventDefault();
    socket.emit("sendMessage", {
      room: params.id,
      user: auth._id,
      message: debounceChat,
      toUser: params.toUser,
    });
    setChat("");
  };

  const messageLike = () => {
    socket.emit("sendMessage", {
      room: params.id,
      user: auth._id,
      message: debounceLike,
      toUser: params.toUser,
    });
  };

  return (
    <Col flex="auto">
      <Contents>
        <Wrapper mode="bottom">
          {!messages.length ? (
            <Empty description={false} />
          ) : (
            messages.map((x) => (
              <Chat friend={auth._id !== x.user._id} key={x._id}>
                <div>
                  <Text>{x.user.name}</Text>
                  <Tooltip placement="left" title={x.createdAt}>
                    <Box>
                      <Text>
                        <Emoji text={x.message} />
                      </Text>
                    </Box>
                  </Tooltip>
                </div>
              </Chat>
            ))
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
            ref={textInput}
            onMouseEnter={inputRef}
          />

          <LikeAndSend>
            {chat.length > 0 ? (
              <Send onClick={messageSend} />
            ) : (
              <Like onClick={messageLike} />
            )}
          </LikeAndSend>
        </EzChat>
      </Wrapper2>
    </Col>
  );
};

export default ChatMain;
