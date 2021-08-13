import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Image from "../pages/image";
import Home from "../pages/home";
import Search from "../pages/search";
import SignIn from "./Auth/SignIn";
import SignUp from "./Auth/SignUp";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/search" exact component={Search} />
        <Route path="/images/:id" exact component={Image} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
      </BrowserRouter>
    </div>
  );
};

export default App;
