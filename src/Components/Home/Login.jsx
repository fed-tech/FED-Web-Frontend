import { ClassNames } from "@emotion/react";
import React from "react";
import "./css/loginpg.css";

function Login() {
    return (
      <div className="full">
      <div className="inside">
        <div className="title">
          <p className="fed">FED</p>
        </div>
        <div className="whitebox">
          <div className="hellopart">
            <p className="welc">Welcome Back</p>
            <p className="det">Please Enter your details</p>
          </div>
          <div className="googlepart">
            <img src="./googleicon.svg" className="icon"></img>
            <p className="log">Login with Google</p>
          </div>
            <p className="or">Or</p>
          <div className="dont">
            <p className="signup"> Don't have an account? <span className="spn">Signup</span></p>
          </div>
          <div className="login-btn"><p className="logtwo">Login</p></div>
          <div className="user">
            <input type="text" placeholder="username" />
          </div>
          <div className="pass">
            <input type="password" placeholder="password" />
          </div>
        </div>
      </div>
      </div>
    );
}
export default Login;
