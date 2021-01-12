import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "antd/dist/antd.css";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
// import NotFound from "./NotFound";
import { LoginPage, Register } from "../containers";

import HomePage from "../pages/HomePage";

import { Messages, Users, Notis, Todo } from "../components";

import { MainLayout, NoMenu } from "../layouts";

export default function Routers() {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/" exact component={HomePage} layout={MainLayout} />

        <PrivateRoute
          path="/messages"
          component={Messages}
          layout={MainLayout}
        />

        <PrivateRoute
          path="/users"
          exact
          component={Users}
          layout={MainLayout}
        />

        <PrivateRoute
          path="/notis"
          exact
          component={Notis}
          layout={MainLayout}
        />

        <PrivateRoute path="/todo" exact component={Todo} layout={MainLayout} />

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
