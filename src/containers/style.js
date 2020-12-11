import styled, { css } from "styled-components";
import { Layout, Input } from "antd";
const { Header, Content } = Layout;

export const LayoutChat = styled(Layout)``;

export const Box = styled.div`
  min-width: 400px;
  max-width: 450px;
  background-color: ${({ theme }) => theme.colors.nav};
  padding: 10px;
  margin: 10px 0;
  box-sizing: border-box;
  border-radius: 20px;
  color: white;
`;

export const HeaderPage = styled(Header)`
  color: white;
`;

export const Contents = styled(Content)`
  padding: 10px;
  box-sizing: border-box;
`;

export const Chat = styled.div`
  display: flex;
  justify-content: flex-end;
  ${({ friend }) =>
    friend &&
    css`
      justify-content: flex-start;
      ${Box} {
        background-color: rgb(98, 113, 130);
      }
    `}
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

export const InputChat = styled(Input)`
  padding: 10px;
  box-sizing: border-box;
`;
