import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Input, Badge } from "antd";
import { Col1, AvatarA, BoxMessage } from "./style";
import { UserOutlined } from "@ant-design/icons";
import callApi from "../../../helpers/axios";

const user = JSON.parse(localStorage.getItem("user"));
const { Search } = Input;

const Users = () => {
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await callApi.get("/users");
        console.log(res.dataUsers);
      } catch (error) {
        console.log("error", error);
      }
    };
    getData();
  }, []);

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
