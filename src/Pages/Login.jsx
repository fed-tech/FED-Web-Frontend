import { ClassNames } from "@emotion/react";
import React, { useState } from "react";
import "./Css/loginpg.css";
import google from "../Img/Google.svg";
import { Link } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  console.log(email);
  console.log(password);
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
            <input
              type="text"
              placeholder="Email"
              className="username"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="pass">
            <input
              type="password"
              placeholder="Password"
              className="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="logtwo">Login</button>
          <div className="dont">
            <p className="signup">
              Don't have an account?{" "}
              <Link to='/Signup'>
                <span className="spn">Signup</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
