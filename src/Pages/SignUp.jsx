import React, { useEffect } from "react";

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
