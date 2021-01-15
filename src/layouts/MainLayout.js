import React, { useEffect } from "react";
import { LayoutA } from "./style";
import { Layout, Row } from "antd";
import { MenuSider, ChatMain } from "../components";
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
      <Layout>
        <Row>
          {children}
          <ChatMain />
        </Row>
      </Layout>
    </LayoutA>
  );
};

export default MainLayout;
