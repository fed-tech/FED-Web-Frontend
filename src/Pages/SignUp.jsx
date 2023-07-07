import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Components
import SignUpFun from "../Components/signup/SignUpFun";

function SignUp() {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SignUpFun />
    </>
  );
}

export default SignUp;
