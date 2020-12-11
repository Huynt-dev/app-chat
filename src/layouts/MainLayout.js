import React from "react";
import { Wrapper } from "./style";

const MainLayout = ({ children }) => {
  return (
    <Wrapper fluid={true}>
      <div>{children}</div>
    </Wrapper>
  );
};

export default MainLayout;
