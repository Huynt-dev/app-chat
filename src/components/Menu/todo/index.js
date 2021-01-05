import React from "react";
import { Link, useParams } from "react-router-dom";
import { Input } from "antd";
import { Col1 } from "./style";
const { Search } = Input;

const Todo = () => {
  return (
    <Col1 span={5}>
      <Search className="Search" placeholder="tìm kiếm ghi chú..." />
      <Link to="/todo/1">
        <div className="room">
          <p>todo</p>
          <p>test</p>
        </div>
      </Link>
      <Link to="/todo/2">
        <div className="room">
          <p>todotodo</p>
          <p>test</p>
        </div>
      </Link>
    </Col1>
  );
};

export default Todo;
