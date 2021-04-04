import React from "react";
import ReactDOM from "react-dom";
import Login from "./Login";
import TimeCard from "./TimeCard";
import "@e-toast/css";
import "@e-toast/css/behaviors.js";

ReactDOM.render(
  <React.StrictMode>
    <Login />
    <TimeCard />
  </React.StrictMode>,
  document.getElementById("root")
);
