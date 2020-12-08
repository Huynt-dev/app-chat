import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import {Wrapper} from './style';

const FromLogin = (props) => {
  return (
    <Wrapper>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="User" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password" />
        </FormGroup>
        <Button>Login</Button>
        <Button className="ml-2">Register</Button>
      </Form>
    </Wrapper>
  );
}

export default FromLogin;