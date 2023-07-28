import React, { useState } from "react";
import AttendedEvnt from "./AttendedEvnt";
import NotAttended from "./NotAttended";
import { useEffect } from "react";

function PopUp3({ dataInp, info }) {
  const [attended, setAttended] = useState(null);
  const toggleAttended = () => {
    setAttended(true);
  };
  const toggleNotAttended = () => {
    setAttended(false);
    const data = { target: { name: "previousEvent", value: "none" } };
    dataInp(data);
  };
  useEffect(()=>{
    if(info.previousEvent==="none"){
      setAttended(false)
    }
    if(["Omega","BlockChain","Other"].includes(info.previousEvent)){
      setAttended(true)
    }
  },[])
  return (
    <>
      <div className="cardeve" id="div2" data-step>
        <h3 className="step-title h3marginTop">
          Have you attended any FED event before?
        </h3>

        <div className="attendedFED">
          <button
            type="button"
            className="Going"
            onClick={toggleAttended}
            style={{ backgroundColor: attended === true && "#f45725" }}
          >
            Yes
          </button>
          <button
            type="button"
            className="Imma"
            onClick={toggleNotAttended}
            style={{ backgroundColor: attended === false && "#f45725" }}
          >
            This is my first time
          </button>
        </div>
        {attended === true && <AttendedEvnt info={info} dataInp={dataInp} />}
        {attended !== null && (
          <>
            <h3 className="step-title h3marginTop">
              How did you get to know event this event?
            </h3>
            <div className="inpDivC">
              <div className="radiobgnDiv">
                <input
                  onChange={dataInp}
                  type="radio"
                  id="InstagramFirstTeam"
                  name="gotToKnow"
                  value="Instagram"
                  required
                  checked={info.gotToKnow === "Instagram"}
                />
                <label htmlFor="InstagramFirstTeam" className="labelTagInp">
                  Instagram
                </label>
              </div>
              <div className="radiobgnDiv">
                <input
                  onChange={dataInp}
                  type="radio"
                  id="EmailFirstTeam"
                  name="gotToKnow"
                  value="Email"
                  checked={info.gotToKnow === "Email"}
                />
                <label htmlFor="EmailFirstTeam" className="labelTagInp">
                  Email
                </label>
                <br />
              </div>
              <div className="radiobgnDiv">
                <input
                  onChange={dataInp}
                  type="radio"
                  id="FriendsFirstTeam"
                  name="gotToKnow"
                  value="Friends"
                  checked={info.gotToKnow === "Friends"}
                />
                <label htmlFor="FriendsFirstTeam" className="labelTagInp">
                  Friends
                </label>
              </div>
              <div className="radiobgnDiv">
                <input
                  onChange={dataInp}
                  type="radio"
                  id="OtherFirstTeam"
                  name="gotToKnow"
                  value="Referral"
                  checked={info.gotToKnow === "Referral"}
                />
                <label htmlFor="OtherFirstTeam" className="labelTagInp">
                  Referral
                </label>
              </div>
              {info.gotToKnow === "Referral" && (
                <div style={{ marginBottom: "5px" }}>
                  <div className="popTDiv">
                    <input
                      onChange={dataInp}
                      type="text"
                      name="referral"
                      className="inpTagPry"
                      id="referral"
                      placeholder="Referred By"
                      required
                      value={info.referral}
                    />
                  </div>
                </div>
              )}
              <div className="radiobgnDiv">
                <input
                  onChange={dataInp}
                  type="radio"
                  id="OtherFirstTeam"
                  name="gotToKnow"
                  value="Other"
                  checked={info.gotToKnow === "Other"}
                />
                <label htmlFor="OtherFirstTeam" className="labelTagInp">
                  Other
                </label>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default PopUp3;
