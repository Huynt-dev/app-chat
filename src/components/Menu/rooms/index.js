import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, withRouter } from "react-router-dom";
import { Badge, Popover } from "antd";
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
import { UserOutlined } from "@ant-design/icons";
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
  const rooms = useSelector((state) => state.rooms.room);
  const countNewMessage = useSelector((state) => state.rooms.countNewMessage);
  const [isSearching, setIsSearching] = useState(false);

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
  }, [dispatch, debouncedSearch, params.id, params.toUser, history]);

  const findMessage = (idRoom, dataUser) => {
    dispatch(findMessageInRoom({ idRoom, toUser: dataUser._id, history }));
    dispatch(sendTo({ dataUser }));
    dispatch(seen({ idRoom, toUser: dataUser._id, user: auth._id }));
  };

  const unSeen = (roomId, userId) => {
    return countNewMessage
      .filter((a) => a.room === roomId && a.user === userId)
      .reduce((total, x) => (x.isSeen === false ? total + 1 : total), 0);
  };

  const searchR = (
    <SearchRoom2
      allowClear
      className="Search"
      placeholder="tìm kiếm..."
      onChange={(e) => setSearchValue(e.target.value)}
      loading={isSearching}
    />
  );

  return (
    <Row1>
      <Col1 xs={4} md={8} lg={6}>
        <Popover placement="rightTop" content={searchR} trigger="click">
          <MenuMobile />
        </Popover>

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
                        findMessage(room._id, dataUser);
                      }}
                    >
                      <Badge
                        count={unSeen(room._id, dataUser._id)}
                        size="small"
                      >
                        <AvatarA
                          shape="square"
                          size={40}
                          src={dataUser.avatar}
                          icon={<UserOutlined />}
                        />
                      </Badge>
                      <Rooms>
                        <p className="name">{dataUser.name}</p>
                        <p className="last-message">
                          {room.who.length === 0
                            ? "No message yet"
                            : room.who === auth.name
                            ? `You: ${room.lastMessage}`
                            : `${room.who}:  ${room.lastMessage}`}
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
