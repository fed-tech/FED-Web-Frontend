import React from "react";
// Css
import SuCss from "./css/Signup.module.css";

//signupform
import SignupForm from "./SignupForm";

function SignUpFun() {
  
  return (
    <>
      <div className={SuCss.mDiv}>
        <div className={SuCss.glassDiv}>
          <p className={SuCss.FED}>FED</p>
          <div className={SuCss.wFFFDiv}>
            <div className={SuCss.helloDiv}> Hello There</div>
            <p className={SuCss.plsDiv}> Please enter Your Details</p>
            <>
            <SignupForm/>
            </>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpFun;
