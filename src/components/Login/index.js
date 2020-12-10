import React from 'react';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import {Wrapper ,FormStyled,Register} from './style';

const FromLogin = (props) => {


  return (
    <Wrapper>
      <FormStyled>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="User" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password" />
        </FormGroup>
        <Register><a href="/">Quên mật khẩu?</a> <a href="/">Đăng ký tài khoản</a></Register>
        <Button>Login</Button>
        <Button className="ml-2">Register</Button>
      </FormStyled>
    </Wrapper>
  );
}

export default FromLogin;