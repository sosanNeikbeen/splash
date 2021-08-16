import React from "react";
import { AuthProvider } from "../context/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./Routes/PrivateRoute";
import { ImageProvider } from "../context/ImageContext";
import reducer, { initialState } from "../Reducers/reducer";
import Image from "../pages/image";
import Home from "../pages/home";
import Search from "../pages/search";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import PasswordReset from "./Auth/PasswordReset";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <AuthProvider>
            <PrivateRoute path="/images/:id" component={Image} />
            <ImageProvider initialState={initialState} reducer={reducer}>
              <Route path="/" exact component={Home} />
              <Route path="/search" component={Search} />
            </ImageProvider>
            <Route path="/signin" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/resetpassword" component={PasswordReset} />
          </AuthProvider>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
