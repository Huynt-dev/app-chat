import styled, { css } from "styled-components";
import { Layout, Input, Button } from "antd";
import ScrollToBottom from "react-scroll-to-bottom";
import { SmileTwoTone, LikeTwoTone, SendOutlined } from "@ant-design/icons";
const { Header, Content } = Layout;

export const Wrapper = styled(ScrollToBottom)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
`;

export const Box = styled.div`
  max-width: 300px;
  word-break: break-all;
  background-color: ${({ theme }) => theme.colors.nav};
  padding: 5px 10px;
  margin: 5px 0;
  box-sizing: border-box;
  border-radius: 20px;
  color: white;
`;

export const HeaderPage = styled(Header)`
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    color: white;
  }
  .ok {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Contents = styled(Content)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-sizing: border-box;
  height: calc(100vh - 100px);
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 8px;
  }
`;

export const Chat = styled.div`
  display: flex;
  justify-content: flex-end;
  text-align: right;
  box-sizing: border-box;
  padding: 0 50px;
  ${({ friend }) =>
    friend &&
    css`
      justify-content: flex-start;
      text-align: left;
      ${Box} {
        background-color: rgb(98, 113, 130);
      }
    `};
`;

export const Text = styled.p`
  padding: 5px;
  margin: 0;
  box-sizing: border-box;
`;

export const Time = styled.p`
  padding: 5px;
  margin: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
`;

export const Wrapper2 = styled.form`
  display: flex;
  padding: 10px;
  box-sizing: border-box;
`;

export const EzChat = styled.div`
  display: flex;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  background-color: white;
  margin: 10px;
  border-radius: 20px;
`;

export const Icon = styled(SmileTwoTone)`
  display: flex;
  align-items: center;
  font-size: 26px;
  padding: 0 10px;
  box-sizing: border-box;
`;

export const InputChat = styled(Input)`
  display: flex;
  align-items: center;
  padding: 25px 10px;
  box-sizing: border-box;
  height: 60px;
  background: none;
  border: none;
  &:focus {
    box-shadow: none;
    outline: none;
  }
`;

export const LikeAndSend = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Send = styled(SendOutlined)`
  font-size: 24px;
  color: #1890ff;
`;

export const Like = styled(LikeTwoTone)`
  font-size: 24px;
`;
