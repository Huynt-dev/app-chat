import React from "react";
import { Layout } from "antd";
const NoMenu = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <>{children}</>
    </Layout>
  );
};

export default NoMenu;
