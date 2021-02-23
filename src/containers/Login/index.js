import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import GoogleLogin from "react-google-login";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { FromA } from "./style";
import { login } from "../../redux/auth/actions";

const LoginPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const responseGoogle = (response) => {
    console.log(response);
  };

  const handleLogin = (data) => {
    dispatch(login({ email: data.username, password: data.password, history }));
  };

  return (
    <FromA
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={handleLogin}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          type="email"
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>

        <GoogleLogin
          clientId="683745740243-e5hidc31t2d9106vuifft5spnfbaj34u.apps.googleusercontent.com"
          buttonText="Sign in with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />

        <div>
          Or <a href="/register">register now!</a>
        </div>
      </Form.Item>
    </FromA>
  );
};

export default LoginPage;
