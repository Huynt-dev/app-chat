import React, { useEffect } from "react";
import { LayoutA } from "./style";
import { Layout } from "antd";
import { MenuSider } from "../components";
import { useSelector } from "react-redux";
import { socket } from "configs/socket";

const MainLayout = ({ children }) => {
  const token = useSelector((state) => state.auth.token);
  useEffect(() => {
    socket.emit("auth", token);
  }, [token]);
  return (
    <LayoutA style={{ minHeight: "100vh" }}>
      <MenuSider />
      <Layout>{children}</Layout>
    </LayoutA>
  );
};

export default MainLayout;
