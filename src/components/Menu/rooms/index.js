import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, withRouter, NavLink } from "react-router-dom";
import { Badge, Drawer, Menu } from "antd";
import {
  Col1,
  Row1,
  BoxMessage,
  AvatarA,
  Rooms,
  BoxRoom,
  SearchRoom,
  SearchRoom2,
  MenuMobile,
} from "./style";
import { UserOutlined, MessageOutlined } from "@ant-design/icons";
import { ChatMain } from "../../index";
import { getRooms, searchRoom, findMessageInRoom } from "redux/rooms/actions";
import { sendTo, seen } from "redux/rooms/reducer";
import useDebounce from "helpers/useDebounce";

const Messages = () => {
  const [searchValue, setSearchValue] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();
  const auth = useSelector((state) => state.auth.user);
  const [isSearching, setIsSearching] = useState(false);
  const [drawer, setShowDrawer] = useState(false);

  const debouncedSearch = useDebounce(searchValue, 1000);

  useEffect(() => {
    const callAPI = async () => {
      if (params.id !== undefined) {
        dispatch(
          findMessageInRoom({
            idRoom: params.id,
            toUser: params.toUser,
            history,
          })
        );
        dispatch(sendTo(params.toUser));
      }

      if (debouncedSearch) {
        setIsSearching(true);
        await dispatch(searchRoom(debouncedSearch));
        setIsSearching(false);
      } else {
        dispatch(getRooms());
      }
    };
    callAPI();
  }, [dispatch, debouncedSearch]);

  const findMessage = (idRoom, toUser) => {
    dispatch(findMessageInRoom({ idRoom, toUser, history }));
    dispatch(sendTo(toUser));
    dispatch(seen({ idRoom, toUser }));
  };

  const rooms = useSelector((state) => state.rooms.room);
  const countNewMessage = useSelector((state) => state.rooms.countNewMessage);

  const unSeen = (roomId, userId) => {
    return countNewMessage
      .filter((a) => a.room === roomId && a.user === userId)
      .reduce((total, x) => (x.isSeen === false ? total + 1 : total), 0);
  };

  const showDrawer = () => {
    setShowDrawer(true);
  };

  const onClose = () => {
    setShowDrawer(false);
  };

  return (
    <Row1>
      <Col1 xs={4} md={8}>
        <MenuMobile onClick={showDrawer} />

        <Drawer
          placement="left"
          closable={false}
          onClose={onClose}
          visible={drawer}
        >
          <Menu defaultSelectedKeys={["/"]}>
            <SearchRoom2
              allowClear
              className="Search"
              placeholder="tìm kiếm..."
              onChange={(e) => setSearchValue(e.target.value)}
              loading={isSearching}
            />
            <Menu.Item key="/room" icon={<MessageOutlined />}>
              <NavLink to="/room">Messages</NavLink>
            </Menu.Item>
            <Menu.Item key="/users" icon={<UserOutlined />}>
              <NavLink to="/users">Users</NavLink>
            </Menu.Item>
          </Menu>
        </Drawer>

        <SearchRoom
          allowClear
          className="Search"
          placeholder="tìm kiếm..."
          onChange={(e) => setSearchValue(e.target.value)}
          loading={isSearching}
        />

        <BoxRoom>
          {rooms.map((room) => {
            return (
              <div key={room._id}>
                {room.users
                  .filter((user) => user._id !== auth._id)
                  .map((dataUser) => (
                    <BoxMessage
                      className={room._id === params.id ? "active" : ""}
                      key={room._id}
                      onClick={() => {
                        findMessage(room._id, dataUser._id);
                      }}
                    >
                      <Badge
                        count={unSeen(room._id, dataUser._id)}
                        size="small"
                      >
                        <AvatarA
                          shape="square"
                          size={50}
                          src={dataUser.avatar}
                          icon={<UserOutlined />}
                        />
                      </Badge>
                      <Rooms>
                        <p className="name">{dataUser.name}</p>
                        <p className="last-message">
                          {room.who.length === 0
                            ? "Chưa có tin nhắn"
                            : room.who === auth.name
                            ? "You" + ": " + room.lastMessage
                            : room.who + ": " + room.lastMessage}
                        </p>
                      </Rooms>
                    </BoxMessage>
                  ))}
              </div>
            );
          })}
        </BoxRoom>
      </Col1>
      {params.id === undefined ? "" : <ChatMain />}
    </Row1>
  );
};

export default withRouter(Messages);
