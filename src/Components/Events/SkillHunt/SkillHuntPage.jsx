import React, { useContext, useState } from "react";

// Components
import PopUpModal from "./skillhunt/PopUpModal";
import SuccessModal from "./skillhunt/SuccessModal";

// img
import regImg from "./../../../assets/SkillHunt/point.png";

// css
import "./Css/SkillHunt.css";
import AuthContext from "../../../store/auth-context";
import { useNavigate } from "react-router-dom";

function SkillHuntPage() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [showSuccess, setSuccess] = useState(false);
  const [regStatus, setRegStatus] = useState(false);

  const authCtx = useContext(AuthContext);
  const redirect = useNavigate();

  const handlePopUp = (e) => {
    if (authCtx.token == null) {
      redirect("/Login");
    } else {
      setShowPopUp(true);
    }
  };

  return (
    <>
      <div>
        {/* <div className="mainContainer"></div> */}
        {authCtx.isLoggedIn ? (
          <>
            {!localStorage.getItem("regForm") ? (
              <div className="btnDivReg">
                <h2>Already Registered!</h2>
              </div>
            ) : (
              <>
                <div
                  className="btnDivReg"
                  onClick={() => {
                    console.log(regStatus);
                    !regStatus && handlePopUp();
                  }}
                >
                  <h2>{regStatus ? "Thank You" : "Coming Soon"}</h2>
                  <img src={regImg} alt="" srcset="" id="point" />
                </div>
              </>
            )}
          </>
        ) : (
          <>
            <div className="btnDivReg" onClick={handlePopUp}>
              <h2>Coming Soon</h2>
              <img src={regImg} alt="" srcset="" id="point" />
            </div>
          </>
        )}
        {/* {localStorage.getItem("regForm") ? (
          <div className="btnDivReg">
            <h2>
              {authCtx.isLoggedIn ? "Already Registered!" : "Coming Soon"}
            </h2>
          </div>
        ) : (
          <div
            className="btnDivReg"
            onClick={() => {
              console.log(regStatus);
              !regStatus && handlePopUp();
            }}
          >
            <h2>
              {regStatus ? "Thank You" : "Coming Soon"}
            </h2>
            <img src={regImg} alt="" srcset="" id="point" />
          </div>
        )} */}
      </div>

      {/* <!-- alert --> */}
      {showSuccess && <SuccessModal setSuccess={setSuccess} />}
      {showPopUp && (
        <PopUpModal
          setShowPopUp={setShowPopUp}
          setSuccess={setSuccess}
          setRegStatus={setRegStatus}
        />
      )}
    </>
  );
}

export default SkillHuntPage;
