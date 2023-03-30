import React from "react";

// Css
import SuCss from "./Css/Signup.module.css";

// Components
import Form from "./../Components/Signup/Form";

export default function Signup() {
  return (
    <div className={SuCss.mDiv}>
      <div className={SuCss.glassDiv}>
        <p className={SuCss.FED}>FED</p>
        <Form />
      </div>
    </div>
  );
}
