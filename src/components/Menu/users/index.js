import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Input } from "antd";
import { Row1, Col1, AvatarA, BoxMessage, Container, BadgeA } from "./style";
import { UserOutlined } from "@ant-design/icons";
import { getUsers } from "redux/users/action";
import { checkUserInRoom } from "redux/rooms/actions";
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

  return (
    <Container>
      <div>
        <Search className="Search" placeholder="tìm kiếm..." />
        <Row1>
          {users.map((x, index) => {
            return (
              <Col1 key={index} span={12}>
                <div
                  onClick={() => {
                    findUser(x._id);
                  }}
                >
                  <BoxMessage>
                    <BadgeA status="success">
                      <AvatarA
                        shape="square"
                        size={60}
                        src={x.avatar}
                        icon={<UserOutlined />}
                      />
                    </BadgeA>

                    <div className="text-chat">
                      <h3>{x.name}</h3>
                      <p>
                        Email: <span>{x.email}</span>
                      </p>
                    </div>
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
