import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
// import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
// import NotFound from "./NotFound";
import {Main} from "../components/Contents";
import {Login} from "../components/Login";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Routers() {
  return (
    <Router>
      <Switch>
        <PublicRoute path="/" exact component={Main} />
        <PublicRoute path="/login" exact component={Login} />
      </Switch>
    </Router>
  );
}