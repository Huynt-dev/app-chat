import React from "react";
import { LayoutA } from "./style";
import { Layout } from "antd";
import { MenuSider } from "../components";
const MainLayout = ({ children }) => {
  return (
    <LayoutA style={{ minHeight: "100vh" }}>
      <MenuSider />
      <Layout>{children}</Layout>
    </LayoutA>
  );
};

export default MainLayout;
