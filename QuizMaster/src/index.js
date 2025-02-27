import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import data from "./data/data.js";
import definitions from "./data/definitions.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App data={data} definitions={definitions} />
  </React.StrictMode>
);
