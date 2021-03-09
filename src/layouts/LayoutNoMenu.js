import React from "react";
import { Layout } from "./style";

const NoMenu = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <>{children}</>
    </Layout>
  );
};

export default NoMenu;
