import React from "react";

// Components
import LoginForm from "./LoginForm";
import Header from "./Header";

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
            <Header title="Welcome Back" des="Please Enter your details" />
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginFun;
