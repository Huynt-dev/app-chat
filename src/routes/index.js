import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
// import NotFound from "./NotFound";
import { HomePage, LoginPage } from "../containers";

import MainLayout from '../layouts/MainLayout';
import "bootstrap/dist/css/bootstrap.min.css";


export default function Routers() {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/" exact component={HomePage} layout={MainLayout} />
        <PublicRoute path="/login" exact component={LoginPage} />
      </Switch>
    </Router>
  );
}