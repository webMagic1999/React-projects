import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";
import getProducts from "./data/apiData";
import menuItems from "./data/menuItems";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App onHandleGetProduct={getProducts} menuItems={menuItems} />
  </React.StrictMode>
);
