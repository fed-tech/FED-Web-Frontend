import React, { useEffect, useState, useContext } from "react";
import LoginFun from "../Components/login/LoginFun";

function Login(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  

  return (
    <>
      <LoginFun/>
    </>
  );
}

export default Login;
