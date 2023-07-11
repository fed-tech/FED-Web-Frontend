import React, { useState } from "react";

// Components
import PopUpModal from "./skillhunt/PopUpModal";
import SuccessModal from "./skillhunt/SuccessModal";

// img
import regImg from "./../../../assets/SkillHunt/point.png";

// css
import "./Css/SkillHunt.css";

function SkillHuntPage() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [showSuccess, setSuccess] = useState(false);
  const handlePopUp = (e) => {
    setShowPopUp(true);
  };

  return (
    <>
      <div>
        <div className="mainContainer"></div>

        <div className="btnDivReg" onClick={handlePopUp}>
          <h2>
            Coming Soon
            {/* Register Now */}
          </h2>
          <img src={regImg} alt="" srcset="" id="point" />
        </div>
      </div>

      {/* <!-- alert --> */}
      {showSuccess && <SuccessModal setSuccess={setSuccess} />}
      {showPopUp && (
        <PopUpModal setShowPopUp={setShowPopUp} setSuccess={setSuccess} />
      )}
    </>
  );
}

export default SkillHuntPage;
