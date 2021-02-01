import styled from "styled-components";
import { Form } from "antd";

export const FormA = styled(Form)`
  width: 600px;
  margin: 60px auto;
  padding: 20px 30px 1px 30px;
  background-color: ${({ theme }) => theme.colors.menu};
  box-sizing: border-box;
  Button {
    width: 100%;
  }
`;
