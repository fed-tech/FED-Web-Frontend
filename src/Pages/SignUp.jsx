import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import SignUpFun from "../Components/signup/SignUpFun";

function SignUp() {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  const toggleModel = () => {
    setModal(!modal);
    navigate("/Login");
  };
  return (
    <>
      <SignUpFun />
      {modal && (
        <div className={SuCss.modal}>
          <div className={SuCss.modalcontent}>
            <img src={tick}></img>
            <h2>SignUp Successfully!</h2>
            <h3>Please check your mail !!</h3>
            <button className={SuCss.ok} onClick={toggleModel}>
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default SignUp;
