import styled, { css, keyframes } from "styled-components";
import { Layout, Input } from "antd";
import ScrollToBottom from "react-scroll-to-bottom";
import {
  SmileOutlined,
  LikeFilled,
  SendOutlined,
  EyeOutlined,
} from "@ant-design/icons";
const { Header, Content } = Layout;

export const Wrapper = styled(ScrollToBottom)`
  height: 100%;
  &&& {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const Box = styled.div`
  max-width: 300px;
  word-break: break-all;
  background-color: ${({ theme }) => theme.colors.nav};
  padding: 5px 10px;
  margin: 5px 0;
  box-sizing: border-box;
  border-radius: 20px;
  color: ${({ theme }) => theme.fonts.light};
`;

export const HeaderPage = styled(Header)`
  color: ${({ theme }) => theme.fonts.light};
  background-color: ${({ theme }) => theme.colors.header};
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    color: ${({ theme }) => theme.fonts.light};
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
  height: calc(100vh - 102px);
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 8px;
  }
`;

const aRight = keyframes`
  from {
    -webkit-transform: translateX(-1000px) scaleX(2.5) scaleY(0.2);
            transform: translateX(-1000px) scaleX(2.5) scaleY(0.2);
    -webkit-transform-origin: 100% 50%;
            transform-origin: 100% 50%;
    -webkit-filter: blur(40px);
            filter: blur(40px);
    opacity: 0;
  }

  to {
    -webkit-transform: translateX(0) scaleY(1) scaleX(1);
            transform: translateX(0) scaleY(1) scaleX(1);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
`;

export const Chat = styled.div`
  display: flex;
  justify-content: flex-end;
  text-align: right;
  box-sizing: border-box;
  padding: 0 50px;
  -webkit-animation: ${aRight} 0.6s;
  animation: ${aRight} 0.6s;
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

export const CheckSeen = styled(EyeOutlined)`
  padding: 5px;
  margin: 0;
  box-sizing: border-box;
  ${({ unSeen }) =>
    unSeen &&
    css`
      color: green;
    `}
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
  background-color: none;
  border: 1px solid ${({ theme }) => theme.colors.nav};
  display: flex;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;

  margin: 10px;
  border-radius: 20px;
`;

export const Icon = styled(SmileOutlined)`
  color: ${({ theme }) => theme.colors.nav};
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
  color: ${({ theme }) => theme.colors.nav};
`;

export const Like = styled(LikeFilled)`
  color: ${({ theme }) => theme.colors.nav};
  font-size: 24px;
`;

export const BtnToBotton = styled.button`
  border-radius: 10px;
  border-width: 0;
  bottom: 5px;
  cursor: pointer;
  height: 20px;
  outline: 0;
  position: absolute;
  right: 20px;
  width: 20px;
`;
