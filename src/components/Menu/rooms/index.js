import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
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
  const param = useParams();
  const auth = useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(getRooms());
  }, [dispatch]);

  const findMessage = (idRoom) => {
    history.push(`/room/${idRoom}`);
    dispatch(findMessageInRoom({ idRoom, history }));
  };

  const rooms = useSelector((state) => state.rooms.room);

  const findBoy = (e) => {
    const text = e.target.value;

    const dataSearch = rooms.filter((user) => user._id !== auth._id);
    // .filter((dataUser) => dataUser.name.includes(text));
    console.log("aaa", dataSearch);
  };

  return (
    <Row1>
      <Col1 span={6}>
        <Search
          className="Search"
          placeholder="tìm kiếm..."
          onChange={findBoy}
        />

        {rooms.map((x) => {
          return (
            <div
              key={x._id}
              onClick={() => {
                findMessage(x._id);
              }}
            >
              <BoxMessage>
                {x.users
                  .filter((user) => user._id !== auth._id)
                  .map((dataUser) => (
                    <>
                      <AvatarA
                        shape="square"
                        size={50}
                        src={dataUser.avatar}
                        icon={<UserOutlined />}
                      />
                      <Rooms>
                        <p className="name">{dataUser.name}</p>
                        <p className="last-message">{x.lastMessage}</p>
                      </Rooms>
                    </>
                  ))}
              </BoxMessage>
            </div>
          );
        })}
      </Col1>
      {console.log(param)}
      {param.id === "home" ? "" : <ChatMain />}
    </Row1>
  );
};

export default Messages;
