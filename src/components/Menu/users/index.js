import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Input, Badge } from "antd";
import { Col1, AvatarA, BoxMessage } from "./style";
import { UserOutlined } from "@ant-design/icons";
import { getUsers } from "redux/users/action";
import { getMessage } from "redux/messages/actions";
import { socket } from "configs/socket";

const { Search } = Input;

const Users = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const getMessageId = (idUser) => {
    dispatch(getMessage({ idUser }));
  };

  const users = useSelector((state) => state.user.users);
  const status = useSelector((state) => state.user.status);

  return (
    <Col1 span={5}>
      <Search className="Search" placeholder="tìm kiếm..." />
      {users.map((x, index) => {
        return (
          <Link
            key={index}
            onClick={() => {
              getMessageId(x._id);
            }}
            to={`/messages/${x._id}`}
          >
            <BoxMessage>
              <Badge status={status}>
                <AvatarA
                  shape="square"
                  size={50}
                  src={x.avatar}
                  icon={<UserOutlined />}
                />
              </Badge>
              <div className="text-chat">
                <p>{x.name}</p>
              </div>
            </BoxMessage>
          </Link>
        );
      })}
    </Col1>
  );
};

export default Users;
