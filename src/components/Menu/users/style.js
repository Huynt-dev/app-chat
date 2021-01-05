import styled from "styled-components";
import { Avatar, Col } from "antd";

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

  .text-chat {
    margin-left: 8px;
    box-sizing: border-box;
  }

  p {
    margin: 0;
    color: black;
  }
`;

export const AvatarA = styled(Avatar)`
  background-color: red;
  background-color: #c9d4e5;
  box-shadow: 0 0 0 1px #fff;
`;
