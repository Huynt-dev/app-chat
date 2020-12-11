import React from "react";
import { LayoutChat } from "./style";
import { Layout } from "antd";
import { MenuSider } from "../components";
const MainLayout = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <MenuSider />
      <LayoutChat>{children}</LayoutChat>
    </Layout>
  );
};

export default MainLayout;
