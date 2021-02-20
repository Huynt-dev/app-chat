import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, withRouter } from "react-router-dom";
import { socket } from "configs/socket";
import { Input, Badge } from "antd";
import { Col1, Row1, BoxMessage, AvatarA, Rooms, BoxRoom } from "./style";
import { UserOutlined } from "@ant-design/icons";
import { ChatMain } from "../../index";
import { getRooms, searchRoom, findMessageInRoom } from "redux/rooms/actions";
import useDebounce from "helpers/useDebounce";
const { Search } = Input;

const Messages = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const param = useParams();
  const auth = useSelector((state) => state.auth.user);
  const [isSearching, setIsSearching] = useState(false);

  const debouncedSearch = useDebounce(searchValue, 1000);

  useEffect(() => {
    const callAPI = async () => {
      if (param.id !== undefined) {
        dispatch(findMessageInRoom({ idRoom: param.id, history }));
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

  const findMessage = (idRoom) => {
    dispatch(findMessageInRoom({ idRoom, history }));
  };

  const rooms = useSelector((state) => state.rooms.room);

  return (
    <Row1>
      <Col1 xs={0} sm={0} md={8}>
        {/* {console.log(location.pathname)} */}
        <Search
          className="Search"
          placeholder="tìm kiếm..."
          onChange={(e) => setSearchValue(e.target.value)}
          loading={isSearching}
        />

        <BoxRoom>
          {rooms.map((x) => {
            return (
              <div
                key={x._id}
                onClick={() => {
                  findMessage(x._id);
                }}
              >
                {x.users
                  .filter((user) => user._id !== auth._id)
                  .map((dataUser) => (
                    <BoxMessage
                      className={x._id === param.id ? "active" : ""}
                      key={x._id}
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
                            ? "Bạn" + ": " + x.lastMessage
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
      {/* {console.log(param.id)} */}
      {param.id === undefined ? "" : <ChatMain />}
    </Row1>
  );
};

export default withRouter(Messages);
