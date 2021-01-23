import styled from "styled-components";
import { Avatar, Row, Col, Card, Badge } from "antd";

export const Container = styled.div`
  background-color: #1890ff;
  height: 100%;
  .Search {
    padding: 10px;
    box-sizing: border-box;
  }
`;

export const Row1 = styled(Row)`
  height: 100%;
`;

export const Col1 = styled(Col)``;

export const BoxMessage = styled(Card)`
  display: flex;
  align-items: center;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(240, 242, 245, 1) 100%
  );
  margin: 10px;
  &:hover {
    background-color: white;
    margin: 10px;
  }

  .text-chat {
    display: inline-block;
    margin-left: 10px;
    box-sizing: border-box;
    height: auto;
    h3 {
      font-weight: bold;
    }
  }

  p {
    margin: 0;
    color: black;
  }
`;

export const BadgeA = styled(Badge)`
  float: left;
`;

export const AvatarA = styled(Avatar)`
  display: block;
  margin-bottom: 10px;
  background-color: red;
  background-color: #c9d4e5;
  box-shadow: 0 0 0 1px #fff;
`;
