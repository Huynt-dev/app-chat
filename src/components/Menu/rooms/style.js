import styled from "styled-components";
import { Avatar, Col, Row } from "antd";

export const Row1 = styled(Row)`
  height: 100%;
`;

export const Col1 = styled(Col)`
  background-color: #1890ff;
  .Search {
    padding: 10px;
    box-sizing: border-box;
  }
`;

export const BoxMessage = styled.div`
  display: flex;
  align-items: center;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(240, 242, 245, 1) 100%
  );
  padding: 10px;

  &:hover {
    background-color: white;
    padding: 10px;
  }

  p {
    margin: 0;
    color: black;
  }
`;

export const AvatarA = styled(Avatar)`
  background-color: red;
  margin-right: 7px;
  background-color: #c9d4e5;
  box-shadow: 0 0 0 1px #fff;
  box-sizing: border-box;
`;

export const Rooms = styled.div`
  display: inline-block;
  margin-left: 10px;
  box-sizing: border-box;
  height: auto;
  .name {
    width: 100%;
    font-weight: bold;
  }

  .last-message {
    display: block;
    font-style: italic;
    width: 250px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
