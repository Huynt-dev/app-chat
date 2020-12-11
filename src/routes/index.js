import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "antd/dist/antd.css";
// import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
// import NotFound from "./NotFound";
import { HomePage } from "../containers";

import MainLayout from "../layouts/MainLayout";

export default function Routers() {
  return (
    <Router>
      <Switch>
        <PublicRoute path="/" exact component={HomePage} layout={MainLayout} />
      </Switch>
    </Router>
  );
}
