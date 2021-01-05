import React from "react";
import { Link, useParams } from "react-router-dom";
import { Input, Badge } from "antd";
import { Col1, AvatarA, BoxMessage } from "./style";
import { UserOutlined } from "@ant-design/icons";

const user = JSON.parse(localStorage.getItem("user"));
const { Search } = Input;

const Users = () => {
  return (
    <Col1 span={5}>
      <Search className="Search" placeholder="tìm kiếm..." />
      <Link to="/messages/1">
        <BoxMessage>
          <Badge status="success">
            <AvatarA
              shape="square"
              size={50}
              src={user.avatar}
              icon={<UserOutlined />}
            />
          </Badge>
          <div className="text-chat">
            <p>Name</p>
          </div>
        </BoxMessage>
      </Link>
    </Col1>
  );
};

export default Users;
