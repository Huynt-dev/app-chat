import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Input } from "antd";
import { Col1, AvatarA, BoxMessage } from "./style";
import { UserOutlined } from "@ant-design/icons";
import { ChatMain } from "../../../components";

const { Search } = Input;

// const Conversation = () => {
//   const { id } = useParams();
//   return <div>Current conversation: {id}</div>;
// };

const Messages = () => {
  const users = useSelector((state) => state.auth.user);
  return (
    <Col1 span={5}>
      <Search className="Search" placeholder="tìm kiếm..." />
    </Col1>
  );
};

/* <Col span={17}>
        <Switch>
          <Route path="/messages/:id">
            <Conversation />
          </Route>
        </Switch>
      </Col> */

export default Messages;
