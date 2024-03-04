import React, { useEffect } from "react";

// Components
import SignUpFun from "../Components/signup/SignUpFun";

function SignUp({setError}) {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SignUpFun setError={setError}/>
    </>
  );
}

export default SignUp;
