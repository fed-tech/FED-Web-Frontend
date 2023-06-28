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
    <GoogleOAuthProvider clientId="606182598951-2jbnd8127rc2hoaoapfm3te6t6bl8p72.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </AuthContextProvider>
);
