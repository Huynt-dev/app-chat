import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "antd/dist/antd.css";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
// import NotFound from "./NotFound";
import { LoginPage, Register, HomePage } from "../containers";

import { Messages, Users } from "../components";

import { MainLayout, NoMenu } from "../layouts";

export default function Routers() {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/" exact component={HomePage} layout={MainLayout} />

        <PrivateRoute
          path="/room"
          exact
          component={Messages}
          layout={MainLayout}
        />

        <PrivateRoute
          path="/room/:id/:toUser"
          component={Messages}
          layout={MainLayout}
        />

        <PrivateRoute
          path="/users"
          exact
          component={Users}
          layout={MainLayout}
        />

        <PublicRoute
          path="/login"
          exact
          component={LoginPage}
          layout={NoMenu}
        />

        <PublicRoute
          path="/register"
          exact
          component={Register}
          layout={NoMenu}
        />
      </Switch>
    </Router>
  );
}
