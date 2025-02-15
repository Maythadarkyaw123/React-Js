import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";  // Optional for global styles

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <h1>Hello This is from Main.js</h1>
  </React.StrictMode>
);
