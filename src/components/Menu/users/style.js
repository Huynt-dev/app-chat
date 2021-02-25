import styled from "styled-components";
import { Avatar, Row, Col, Card } from "antd";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.nav};
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
  background: rgba(255, 255, 255, 0.5);
  margin: 10px;
  transition-property: all;
  transition-duration: 2s;
  &:hover {
    background-color: white;
    margin: 10px;
  }
`;

export const AvatarA = styled(Avatar)`
  margin-bottom: 10px;
  background-color: red;
  background-color: #c9d4e5;
  box-shadow: 0 0 0 1px #fff;
`;

export const BadgeA = styled.div`
  display: inline-block;
`;

export const TextA = styled.div`
  display: inline-block;
  margin-left: 10px;
  box-sizing: border-box;
  height: auto;
  h3 {
    font-weight: bold;
    margin: 0;
  }
  p {
    margin: 0;
    color: black;
  }
`;

export const Btn = styled.div`
  display: block;

  .ant-btn {
    margin-right: 10px;
  }
`;
