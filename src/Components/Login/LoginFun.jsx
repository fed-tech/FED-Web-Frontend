import React from "react";

// Components
import LoginForm from "./LoginForm";

// Css
import Lcss from "./css/loginpg.module.css";

function LoginFun() {
  return (
    <>
      <div className={Lcss.full}>
        <div className={Lcss.inside}>
          <div className={Lcss.title1}>
            <p className={Lcss.FED}>FED</p>
          </div>
          <div className={Lcss.whitebox}>
            <div className={Lcss.hellopart}>
              <p className={Lcss.welc}>Welcome Back</p>
              <p className={Lcss.det}>Please Enter your details</p>
            </div>
            <>
              <LoginForm />
            </>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginFun;
