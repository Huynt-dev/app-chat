import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Tooltip, Empty, Popover } from "antd";
import { useParams } from "react-router-dom";
import { seen } from "redux/rooms/reducer";
import Emoji from "react-emoji-render";
import Picker from "emoji-picker-react";
import { socket } from "configs/socket";
import useDebounce from "helpers/useDebounce";

import {
  Center,
  HeaderPage,
  AvatarA,
  Contents,
  Wrapper,
  Wrapper2,
  Chat,
  Text,
  Text2,
  CheckSeen,
  Box,
  InputChat,
  Icon,
  EzChat,
  Send,
  Like,
  LikeAndSend,
  BadgeA,
} from "./style";
import { UserOutlined } from "@ant-design/icons";

const ChatMain = () => {
  const auth = useSelector((state) => state.auth.user);
  const userInfo = useSelector((state) => state.user.userInfo);
  const messages = useSelector((state) => state.rooms.message);
  const params = useParams();
  const [chat, setChat] = useState("");
  const dispatch = useDispatch();
  const debounceChat = useDebounce(chat, 100);
  const debounceLike = useDebounce("👍", 10000);
  const textInput = useRef(null);
  const inputRef = () => {
    textInput.current.focus();
  };
  const onEmojiClick = (e, emojiObject) => {
    setChat(chat + emojiObject.emoji);
  };

  const messageSend = (e) => {
    e.preventDefault();
    console.log(e.value);
    socket.emit("sendMessage", {
      room: params.id,
      user: auth._id,
      message: debounceChat,
      toUser: params.toUser,
    });
    setChat("");
    dispatch(
      seen({ idRoom: params.id, toUser: params.toUser, user: auth._id })
    );
  };

  const messageLike = () => {
    socket.emit("sendMessage", {
      room: params.id,
      user: auth._id,
      message: debounceLike,
      toUser: params.toUser,
    });
    dispatch(
      seen({ idRoom: params.id, toUser: params.toUser, user: auth._id })
    );
  };

  return (
    <Col xs={20} md={16} lg={18}>
      <HeaderPage>
        <BadgeA status={userInfo.isOnline ? "success" : "default"}>
          <AvatarA
            shape="square"
            size={40}
            src={userInfo.avatar}
            icon={<UserOutlined />}
          />
        </BadgeA>

        <h1>{userInfo.name}</h1>
      </HeaderPage>
      <Contents>
        <Wrapper mode="bottom">
          {!messages.length ? (
            <Center>
              <Empty
                description={
                  <span>Messages will be deleted after 24 hours</span>
                }
              />
            </Center>
          ) : (
            messages.map((x) => (
              <div key={x._id}>
                {params.id === x.room ? (
                  <Chat friend={auth._id !== x.user._id}>
                    <div>
                      <Text>
                        <span>{x.user.name}</span>
                        <CheckSeen unseen={x.isSeen === true} />
                      </Text>
                      <Tooltip placement="left" title={x.createdAt}>
                        <Box>
                          <Text2>
                            <Emoji text={x.message} />
                          </Text2>
                        </Box>
                      </Tooltip>
                    </div>
                  </Chat>
                ) : null}
              </div>
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
