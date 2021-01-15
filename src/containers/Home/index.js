import React from "react";
// import { Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { counterIn } from "../../redux/auth/reducer";
// const user = JSON.parse(localStorage.getItem("user"));

const HomePage = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);

  return <div></div>;
};

export default HomePage;
