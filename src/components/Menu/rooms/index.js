import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Input } from "antd";
import { Col1, Row1, BoxMessage, AvatarA, Rooms } from "./style";
import { UserOutlined } from "@ant-design/icons";
import { ChatMain } from "../../index";
import { getRooms } from "redux/rooms/actions";
import { findMessageInRoom } from "redux/rooms/actions";
const { Search } = Input;

const Messages = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const auth = useSelector((state) => state.auth.user);
  useEffect(() => {
    dispatch(getRooms());
  }, [dispatch]);

  const findMessage = (idRoom) => {
    history.push(`/room/${idRoom}`);
    dispatch(findMessageInRoom({ idRoom, history }));
  };

  const rooms = useSelector((state) => state.rooms.room);

  return (
    <Row1>
      <Col1 span={5}>
        <Search className="Search" placeholder="tìm kiếm..." />

        {rooms.map((x) => {
          return (
            <div
              key={x._id}
              onClick={() => {
                findMessage(x._id);
              }}
            >
              <BoxMessage>
                <AvatarA
                  shape="square"
                  size={50}
                  src={x.toUser.avatar}
                  icon={<UserOutlined />}
                />
                <Rooms>
                  {/* <p className="name">{x.toUser.name}</p> */}

                  {x.users
                    .filter((user) => user._id !== auth._id)
                    .map((dataUser) => (
                      <p className="name">{dataUser.name}</p>
                    ))}

                  <p className="last-message">{x.lastMessage}</p>
                </Rooms>
              </BoxMessage>
            </div>
          );
        })}
      </Col1>
      <ChatMain />
    </Row1>
  );
};

export default Messages;
