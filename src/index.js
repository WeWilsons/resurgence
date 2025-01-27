import React from "react";
import ReactDOM from "react-dom";
import "./styles.css"; // Keep your global styles if you have them
import OnePageSite from "./OnePageSite";

ReactDOM.render(
  <React.StrictMode>
    <OnePageSite />
  </React.StrictMode>,
  document.getElementById("root")
);
