import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, withRouter } from "react-router-dom";
import { Badge } from "antd";
import {
  Col1,
  Row1,
  BoxMessage,
  AvatarA,
  Rooms,
  BoxRoom,
  SearchRoom,
} from "./style";
import { UserOutlined } from "@ant-design/icons";
import { ChatMain } from "../../index";
import { getRooms, searchRoom, findMessageInRoom } from "redux/rooms/actions";
import { sendTo } from "redux/rooms/reducer";
import useDebounce from "helpers/useDebounce";

const Messages = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();
  const auth = useSelector((state) => state.auth.user);
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
  }, [dispatch, debouncedSearch]);

  const findMessage = (idRoom, toUser) => {
    dispatch(findMessageInRoom({ idRoom, toUser, history }));
    dispatch(sendTo(toUser));
  };

  const rooms = useSelector((state) => state.rooms.room);

  return (
    <Row1>
      <Col1 xs={0} sm={0} md={8}>
        <SearchRoom
          className="Search"
          placeholder="tìm kiếm..."
          onChange={(e) => setSearchValue(e.target.value)}
          loading={isSearching}
        />

        <BoxRoom>
          {rooms.map((x) => {
            return (
              <div key={x._id}>
                {x.users
                  .filter((user) => user._id !== auth._id)
                  .map((dataUser) => (
                    <BoxMessage
                      className={x._id === params.id ? "active" : ""}
                      key={x._id}
                      onClick={() => {
                        findMessage(x._id, dataUser._id);
                      }}
                    >
                      <Badge count={666} size="small">
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
                          {x.who.length === 0
                            ? "Chưa có tin nhắn"
                            : x.who === auth.name
                            ? "You" + ": " + x.lastMessage
                            : x.who + ": " + x.lastMessage}
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
