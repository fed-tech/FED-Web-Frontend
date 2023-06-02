import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./store/auth-context";
import {GoogleOAuthProvider} from "@react-oauth/google"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <GoogleOAuthProvider clientId="606182598951-2jbnd8127rc2hoaoapfm3te6t6bl8p72.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </AuthContextProvider>
);
