import styled from "styled-components";
import { Form } from "antd";

export const FromA = styled(Form)`
  margin: 60px auto;
  max-width: 600px;

  padding: 20px 20px 1px 20px;
  background-color: whitesmoke;
  box-sizing: border-box;
  .ant-col-rtl .login-form-forgot {
    float: left;
  }
  .login-form {
    max-width: 300px;
  }
  .login-form-forgot {
    float: right;
  }
  .login-form-button {
    width: 100%;
  }
`;
