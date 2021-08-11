import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Image from "../pages/image";
import Header from "./Header";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/images/:id" exact component={Image} />
      </BrowserRouter>
    </div>
  );
};

export default App;
