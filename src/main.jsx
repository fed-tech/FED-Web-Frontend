import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Google Auth
import { GoogleOAuthProvider } from "@react-oauth/google";

// Provider
import { AuthContextProvider } from "./store/auth-context";

// Css
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AuthContextProvider>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
      <App />
    </GoogleOAuthProvider>
  </AuthContextProvider>
);
