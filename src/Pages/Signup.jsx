import React, { useState } from "react";
import SignUpFun from "../Components/signup/SignUpFun";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  
  const toggleModel = () => {
    setModal(!modal);
    navigate("/Login");
  };
  return (
    <>
    <SignUpFun/>
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
