import React from "react";
import { Link, useParams } from "react-router-dom";
import { Input } from "antd";
import { Col1, AvatarA, BoxMessage } from "./style";
import { UserOutlined } from "@ant-design/icons";

const user = JSON.parse(localStorage.getItem("user"));
const { Search } = Input;

// const Conversation = () => {
//   const { id } = useParams();
//   return <div>Current conversation: {id}</div>;
// };

const Messages = () => {
  return (
    <Col1 span={5}>
      <Search className="Search" placeholder="tìm kiếm..." />
      <Link to="/messages/1">
        <BoxMessage>
          <AvatarA
            shape="square"
            size={50}
            src={user.avatar}
            icon={<UserOutlined />}
          />
          <div className="text-chat">
            <p>Messages</p>
            <p>tessssssssssssssssssssst</p>
          </div>
        </BoxMessage>
      </Link>
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
