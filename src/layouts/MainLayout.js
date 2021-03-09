import React, { useEffect } from "react";
import { Layout } from "./style";
import { Layout as LayoutA } from "antd";
import { MenuSider } from "../components";
import { useSelector } from "react-redux";
import { socket } from "configs/socket";

const MainLayout = ({ children }) => {
  const token = useSelector((state) => state.auth.token);
  useEffect(() => {
    socket.emit("auth", token);
  }, [token]);
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <MenuSider />
      <LayoutA>{children}</LayoutA>
    </Layout>
  );
};

export default MainLayout;
