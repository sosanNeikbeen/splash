import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import ImageDetails from "./ImageDetails";
import Home from "../pages/Home";

const App = () => {
  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <div>
        <BrowserRouter>
          <Route path="/" exact component={Home} />
          <Route path="/image/details" exact component={ImageDetails} />
        </BrowserRouter>
      </div>

      {/* <ImageDetails /> */}
    </div>
  );
};

export default App;
