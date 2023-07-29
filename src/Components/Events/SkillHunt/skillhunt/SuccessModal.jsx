import React from "react";
import "./../Css/SkillHunt.css";
import cross from "./../../../../assets/SkillHunt/XCircle.png";
import success from "./../../../../assets/SkillHunt/success.gif";
import { Link } from "react-router-dom";

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
          <div className="successText">
            <div>
              Don't Forget to join the WhatsApp Group for further updates!!
            </div>
            {/* <Link to="https://chat.whatsapp.com/JFc8e3iqgYdIsZcLFkTyWq"> */}
            <div
              className="whatsapp"
              onClick={() => {
                window.location.replace(
                  "https://chat.whatsapp.com/JFc8e3iqgYdIsZcLFkTyWq"
                );
              }}
            >
              Click here to join
            </div>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default SuccessModal;
