import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Provider
import { AuthContextProvider } from "./store/auth-context";

// Css
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);
