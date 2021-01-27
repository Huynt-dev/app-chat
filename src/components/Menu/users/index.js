import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Input, Button, Badge } from "antd";
import {
  Row1,
  Col1,
  AvatarA,
  BoxMessage,
  Container,
  BadgeA,
  TextA,
  Btn,
} from "./style";
import { UserOutlined } from "@ant-design/icons";
import { getUsers } from "redux/users/action";
import { checkUserInRoom } from "redux/rooms/actions";
import { setUsers } from "redux/users/reducer";
// import { socket } from "configs/socket";
const { Search } = Input;

const Users = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const findUser = (idUser) => {
    dispatch(checkUserInRoom({ idUser, history }));
  };

  const users = useSelector((state) => state.user.users);

  const searchUser = (e) => {
    const text = e.target.value;
    const res = text.toLowerCase();
    const find = users.filter((x) => x.name.toLowerCase().includes(res));
    // dispatch(setUsers(find));
    users = find;
  };

  return (
    <Container>
      <div>
        <Search
          className="Search"
          placeholder="tìm kiếm..."
          onChange={searchUser}
        />
        <Row1>
          {users.map((x, index) => {
            return (
              <Col1 key={index} span={12}>
                <div>
                  <BoxMessage>
                    <BadgeA>
                      <Badge status={x.isOnline ? "success" : "default"}>
                        <AvatarA
                          shape="square"
                          size={60}
                          src={x.avatar}
                          icon={<UserOutlined />}
                        />
                      </Badge>
                    </BadgeA>

                    <TextA>
                      <h3>{x.name}</h3>
                      <p>
                        Email: <span>{x.email}</span>
                      </p>
                    </TextA>

                    <Btn>
                      <Button type="primary">Add Friend</Button>
                      <Button
                        onClick={() => {
                          findUser(x._id);
                        }}
                      >
                        Send Messages
                      </Button>
                    </Btn>
                  </BoxMessage>
                </div>
              </Col1>
            );
          })}
        </Row1>
      </div>
    </Container>
  );
};

export default Users;
