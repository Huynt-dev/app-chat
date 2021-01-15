import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
const PrivateRoute = ({ component: Component, layout: Layout, ...rest }) => {
  // const token = localStorage.getItem("token");

  const token = useSelector((state) => state.auth.token);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (token) {
          return (
            <Layout>
              <Component {...props} />
            </Layout>
          );
        }
        return <Redirect to="/login" />;
      }}
    />
  );
};

export default PrivateRoute;
