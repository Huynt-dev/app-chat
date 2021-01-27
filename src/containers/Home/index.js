import React from "react";
import { Typography } from "antd";
import { Container } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { counterIn } from "../../redux/auth/reducer";
// const user = JSON.parse(localStorage.getItem("user"));
const { Title } = Typography;

const HomePage = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);

  return (
    <Container>
      <Title level={3}>Chào mừng bạn đến với App chat với người lạ !</Title>
    </Container>
  );
};

export default HomePage;
