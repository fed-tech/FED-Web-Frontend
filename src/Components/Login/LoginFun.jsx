import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

//  axios
import axios from "axios";

// state
import AuthContext from "./../../store/auth-context";

// css
import LCss from "./Css/Loginpg.module.css";

// Components
import LoginForm from "./LoginForm";

function LoginFun() {
  return (
    <div className={LCss.full}>
      <div className={LCss.inside}>
        <div className={LCss.title1}>
          <p className={LCss.FED}>FED</p>
        </div>
        <div className={LCss.whitebox}>
          <div className={LCss.hellopart}>
            <p className={LCss.welc}>Welcome Back</p>
            <p className={LCss.det}>Please Enter your details</p>
          </div>
          <>
            <LoginForm />
          </>
        </div>
      </div>
    </div>
  );
}

export default LoginFun;
