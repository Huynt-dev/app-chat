import React from "react";
import { Link, useParams } from "react-router-dom";
import { Input } from "antd";
import { Col1 } from "./style";
const { Search } = Input;

const Notis = () => {
  return (
    <Col1 span={5}>
      <Search className="Search" placeholder="tìm kiếm thông báo..." />
      <Link to="/notis/1">
        <div className="room">
          <p>notifications</p>
          <p>test</p>
        </div>
      </Link>
      <Link to="/notis/2">
        <div className="room">
          <p>notifications 22222</p>
          <p>test</p>
        </div>
      </Link>
    </Col1>
  );
};

export default Notis;
