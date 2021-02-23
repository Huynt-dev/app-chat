import React from "react";
import { Typography } from "antd";
import { Container } from "./style";
import { useSelector } from "react-redux";
const { Title } = Typography;

const HomePage = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <Container>
      <Title level={3}>Hello, welcome back {user.name}</Title>
    </Container>
  );
};

export default HomePage;
