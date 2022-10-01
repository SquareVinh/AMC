import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";
import Login from "./pages/Login";
ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <Login />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
