import React from "react";
import { LayoutA } from "./style";

const NoMenu = ({ children }) => {
  return (
    <LayoutA style={{ minHeight: "100vh" }}>
      <>{children}</>
    </LayoutA>
  );
};

export default NoMenu;
