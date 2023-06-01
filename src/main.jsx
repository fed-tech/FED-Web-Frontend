import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./store/auth-context";
import {GoogleOAuthProvider} from "@react-oauth/google"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <GoogleOAuthProvider clientId="294536364723-56kfvttecvq2vaspgf6qv6742l4ruj68.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </AuthContextProvider>
);
