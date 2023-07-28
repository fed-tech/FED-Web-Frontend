import React, { useContext, useEffect, useState } from "react";

// Components
import PopUpModal from "./skillhunt/PopUpModal";
import SuccessModal from "./skillhunt/SuccessModal";

// img
import regImg from "./../../../assets/SkillHunt/point.png";

// css
import "./Css/SkillHunt.css";
import AuthContext from "../../../store/auth-context";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Load from "../../../MicroInterAction/Load";

function SkillHuntPage() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [showSuccess, setSuccess] = useState(false);
  const [regStatus, setRegStatus] = useState(false);
  const [loadingEffect, setLoad] = useState(false);

  const authCtx = useContext(AuthContext);
  const redirect = useNavigate();
  const [regForm, setRegForm] = useState(false);

  const handlePopUp = (e) => {
    if (authCtx.token == null) {
      authCtx.settarget("event");
      redirect("/Login");
    } else {
      setShowPopUp(true);
    }
  };

  useEffect(() => {
    const req = async () => {
      setLoad(true);
      try {
        const response = await axios.get(
          "/form/getuserform?formid=64c29e1a4e0aca04b0f34b47",
          { headers: { Authorization: `${authCtx.token}` } }
        );
        setRegForm(response.data);
        setLoad(false);
      } catch (err) {
        console.log(err);
      }
    };

    req();
  }, []);

  return (
    <>
      <div>
        {authCtx.isLoggedIn ? (
          <>
            {regForm ? (
              <div className="btnDivReg">
                <h2>{loadingEffect ? <Load /> : "Already Registered!"}</h2>
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
                  <h2>
                    {regStatus ? (
                      <>{loadingEffect ? <Load /> : "Thank You"} </>
                    ) : (
                      <>{loadingEffect ? <Load /> : "Register Now!!"} </>
                    )}
                  </h2>
                  <img src={regImg} alt="" srcset="" id="point" />
                </div>
              </>
            )}
          </>
        ) : (
          <>
            <div className="btnDivReg" onClick={handlePopUp}>
              <h2>Register Now!!</h2>
              <img src={regImg} alt="" srcset="" id="point" />
            </div>
          </>
        )}
      </div>
      {/* <div className="btnDivReg">
        <h2>Register Closed</h2>
      </div> */}

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
