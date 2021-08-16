import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();
  const isLoggedIn = currentUser.isLoggedIn;

  return (
    <Route
      {...rest}
      render={(props) => {
        return isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to="/signin" />
        );
      }}
    ></Route>
  );
};

export default PrivateRoute;
