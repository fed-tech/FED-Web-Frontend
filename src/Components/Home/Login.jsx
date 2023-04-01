import { ClassNames } from "@emotion/react";
import React from "react";
import "./css/loginpg.css";
import google from "./../../Img/Google.svg";
function Login() {
  return (
    <div className="full">
      <div className="inside">
        <div className="title1">
          <p className="fed">FED</p>
        </div>
        <div className="whitebox">
          <div className="hellopart">
            <p className="welc">Welcome Back</p>
            <p className="det">Please Enter your details</p>
          </div>
          <div className="googlepart">
            <img src={google} className="icon"></img>
            <p className="log">Login with Google</p>
          </div>
          <p className="or">Or</p>
          <div className="user">
            <input type="text" placeholder="Email" className="username" />
          </div>
          <div className="pass">
            <input
              type="password"
              placeholder="Password"
              className="password"
            />
          </div>
          <div className="login-btn">
            <button className="logtwo">Login</button>
          </div>
          <div className="dont">
            <p className="signup">
              Don't have an account?{" "}
              <a href="/" className="spn">
                Signup
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
