import React, { useEffect } from "react";

function Login() {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div>Login</div>;
}

export default Login;
