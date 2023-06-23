// PrivateRoute.js dosyasını oluşturun ve aşağıdaki kodları ekleyin:

import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLoggedIn } from "./helpers";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isLoggedIn() ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

export default PrivateRoute;
