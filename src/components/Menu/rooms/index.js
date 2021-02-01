import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, withRouter } from "react-router-dom";
import { Input } from "antd";
import { Col1, Row1, BoxMessage, AvatarA, Rooms } from "./style";
import { UserOutlined } from "@ant-design/icons";
import { ChatMain } from "../../index";
import { getRooms, searchRoom, findMessageInRoom } from "redux/rooms/actions";
import useDebounce from "helpers/useDebounce";
const { Search } = Input;

const Messages = ({ location }) => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const param = useParams();
  const auth = useSelector((state) => state.auth.user);

  const debouncedSearch = useDebounce(searchValue, 1000);

  useEffect(() => {
    if (debouncedSearch) {
      dispatch(searchRoom(debouncedSearch));
    } else {
      dispatch(getRooms());
    }
  }, [dispatch, debouncedSearch]);

  const findMessage = (idRoom) => {
    history.push(`/room/${idRoom}`);
    dispatch(findMessageInRoom({ idRoom, history }));
  };

  const rooms = useSelector((state) => state.rooms.room);

  // const findBoy = (e) => {
  //   const text = e.target.value;
  //   const dataSearch = rooms.filter((user) => user._id !== auth._id);
  //   // .filter((dataUser) => dataUser.name.includes(text));
  //   console.log("aaa", dataSearch);
  // };

  return (
    <Row1>
      <Col1 span={6}>
        {/* {console.log(location.pathname)} */}
        <Search
          className="Search"
          placeholder="tìm kiếm..."
          onChange={(e) => setSearchValue(e.target.value)}
        />

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
                  <BoxMessage key={x._id}>
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
                  </BoxMessage>
                ))}
            </div>
          );
        })}
      </Col1>
      {console.log(param.id)}
      {param.id === undefined ? "" : <ChatMain />}
    </Row1>
  );
};

export default withRouter(Messages);
