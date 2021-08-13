import React from "react";
import ReactDOM from "react-dom";
import "./styles/bulma.css";
import App from "./components/App";
import { StateProvider } from "./Reducers/StateProvider";
import reducer, { initialState } from "./Reducers/reducer";

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>,
  document.querySelector("#root")
);
