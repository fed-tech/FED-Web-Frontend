import { ClassNames } from "@emotion/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Pages/Css/loginpg.css";
import google from "../Img/Google.svg";
import { Link, useNavigate } from "react-router-dom";
import { Cookies, useCookies } from "react-cookie";
import bcrypt from "bcryptjs-react";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailerr, setEmailerr] = useState(false);
  const [passwrderr, setPasswrderr] = useState(false);
  const [passwrd, setPassword] = useState("");
  const [isinValid, setIsinValid] = useState(false);
  const [errmssg, setErrMssg] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  console.log(email);
  console.log(passwrd);
  useEffect(() => {
    setIsinValid(false);
    setEmailerr(false);
    setPasswrderr(false);
  }, [email, passwrd]);
  const handlelogin = async (e) => {
    e.preventDefault();
    const username = email;
    if (email === "") {
      setEmailerr(true);
    }
    if (passwrd === "") {
      setPasswrderr(true);
    }
    else{
    try {
      const password = bcrypt.hashSync(
        passwrd,
        "$2b$10$Q0RPeouqYdTToq76zoccIO"
      );
      console.log(password);
      const response = await axios.post(`http://localhost:5000/auth/login`, {
        username,
        password,
      });
      setCookie("AuthToken", response.data.user);
      // const success = response.status === 'ok';
      console.log(response.data);
      if (response.status !== 202) {
        setIsinValid(true);
        setErrMssg("Invalid credentials");
      } else {
        navigate("/MyProfile");
      }
    } catch (err) {
      setIsinValid(true);
      setErrMssg("Invalid Credentials");
      console.log(err);
    }
  }
  };

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
              style={{
                borderBottom: emailerr ? "2px solid red" : "2px solid black",
              }}
            />
          </div>
          <div className="pass">
            <input
              type="password"
              placeholder="Password"
              className="password"
              onChange={(e) => setPassword(e.target.value)}
              style={{
                borderBottom: passwrderr ? "2px solid red" : "2px solid black",
              }}
            />
          </div>
          <button className="logtwo" onClick={handlelogin}>
            Login
          </button>
          <div className="dont">
            <p className="signup">
              Don't have an account?{" "}
              <Link to="/Signup">
                <span className="spn">Signup</span>
              </Link>
            </p>
            <p
              id="errmssg"
              style={{ visibility: isinValid ? "visible" : "hidden" }}
            >
              {errmssg}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
