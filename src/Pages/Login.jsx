import { ClassNames } from "@emotion/react";
import React, { useState } from "react";
import axios from "axios";
import "../Components/Home/css/loginpg.css";
import google from "../Img/Google.svg";
import { Link } from "react-router-dom";
import { Cookies, useCookies } from "react-cookie";
import bcrypt from "bcryptjs-react";
function Login() {
  const [email, setEmail] = useState(null);
  const [passwrd, setPassword] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  console.log(email);
  console.log(passwrd);
  const handlelogin=async(e)=>{e.preventDefault();
    try {
      const password = bcrypt.hashSync(passwrd, bcrypt.genSaltSync());
      const response = await axios.post(`http://localhost:5000/login`,
     {
        email,
        password,
      });
      setCookie("AuthToken", response.data.user);
      const success = response.status === 'ok';
    }
  
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
          <button className="logtwo" onClick={handlelogin}>Login</button>
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
}
export default Login;
