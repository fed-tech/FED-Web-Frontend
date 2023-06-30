import React, { useEffect } from "react";

// Components
import LoginMain from "./../Components/Login/LoginFun";

function Login() {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <LoginMain />
    </>
  );
}

export default Login;
