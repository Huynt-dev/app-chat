import React from "react";
import { LayoutA } from "./style";
import { Layout, Row } from "antd";
import { MenuSider, ChatMain } from "../components";
const MainLayout = ({ children }) => {
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
