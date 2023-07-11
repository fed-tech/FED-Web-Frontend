import React from "react";

// Components
import SignupForm from "./SignupForm";
import Header from "./../Login/Header";

// Css
import SuCss from "./css/Signup.module.css";

function SignUpFun() {
  return (
    <>
      <div className={SuCss.mDiv}>
        <div className={SuCss.mtMDiv}>
          <div className={SuCss.glassDiv}>
            <p className={SuCss.FED}>FED</p>
            <div className={SuCss.wFFFDiv}>
              <Header title="Hello There" des="Please enter Your Details" />
              <SignupForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpFun;
