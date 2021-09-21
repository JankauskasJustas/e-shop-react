import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./components/home/Home";
import { Provider } from "react-redux";
import store from "./state/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Home />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
