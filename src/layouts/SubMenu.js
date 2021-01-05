import React from "react";
import { Col1, LayoutA } from "./style";
import { Layout } from "antd";
import { MenuSider } from "../components";
const SubMenu = ({ children }) => {
  return (
    <LayoutA style={{ minHeight: "100vh" }}>
      <MenuSider />
      <Layout>
        <Col1 span={5}>{children}</Col1>
      </Layout>
    </LayoutA>
  );
};

export default SubMenu;
