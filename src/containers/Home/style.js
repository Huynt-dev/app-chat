import styled, { css } from "styled-components";
import { Layout, Input } from "antd";
const { Header, Content } = Layout;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 30px;
  box-sizing: border-box;
`;

export const Box = styled.div`
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
  padding: 10px;
  box-sizing: border-box;
  height: calc(100vh - 100px);
  overflow-y: scroll;
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

export const Wrapper2 = styled.form`
  padding: 10px;
  box-sizing: border-box;
`;

export const InputChat = styled(Input)`
  padding: 25px 10px;
  box-sizing: border-box;
  height: 60px;
`;
