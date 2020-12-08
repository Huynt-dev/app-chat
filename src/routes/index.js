import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
// import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
// import NotFound from "./NotFound";
import { HomePage } from "../containers";
import {Login} from "../components/Login";
import "bootstrap/dist/css/bootstrap.min.css";


export default function Routers() {
  return (
    <Router>
      <Switch>
        <PublicRoute path="/" exact component={HomePage} />
        <PublicRoute path="/login" exact component={Login} />
      </Switch>
    </Router>
  );
}