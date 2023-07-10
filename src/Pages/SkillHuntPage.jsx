import React, { useState } from "react";
import "./Css/SkillHunt.css";
import PopUpModal from "../Components/skillhunt/PopUpModal";
import regImg from "../assets/SkillHunt/point.png";

function SkillHuntPage() {
  const [showPopUp, setShowPopUp] = useState(false);
  const handlePopUp = (e) => {
    setShowPopUp(true);
  };
  return (
    <div className="SkillHuntPage">
      <section id="omega">
        <div className="mainContainer"></div>
        <div class="btnDivReg">
          <button class="box-type" onClick={handlePopUp}>
            <h2 class="reg">Register Now</h2>
            {/* <!-- <h2 class="reg">Coming Soon</h2> --> */}
            <img src={regImg} alt="" srcset="" id="point" />
          </button>
        </div>
      </section>

      {/* <!-- alert --> */}
      <div class="popUPSucessDiv" id="add">
        <div class="popUpChildDivHome">
          You have Successfully Register in Omega. Please select events you want
          to Attend
        </div>
      </div>
      {showPopUp && <PopUpModal setShowPopUp={setShowPopUp} />}
    </div>
  );
}

export default SkillHuntPage;
