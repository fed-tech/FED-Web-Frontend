import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Google Auth
import { GoogleOAuthProvider } from "@react-oauth/google";

// Css
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
    <App />
  </GoogleOAuthProvider>
);
