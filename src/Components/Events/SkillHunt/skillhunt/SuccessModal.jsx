import React from "react";
import "./../Css/SkillHunt.css";
import cross from "./../../../../assets/SkillHunt/XCircle.png";
import success from "./../../../../assets/SkillHunt/success.gif";

function SuccessModal({ setSuccess }) {
  const handleClose = () => {
    setSuccess(false);
  };
  return (
    <>
      <div class="popUPSucessDiv" id="add">
        <div class="popUpChildDivHome">
          <div className="cancelSuccess">
            <img src={cross} alt="" onClick={handleClose} />
          </div>
          <p className="successText">
            You have Successfully Registered in Skill Hunt.
          </p>
          <div className="sucssGif">
            <img src={success} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default SuccessModal;
