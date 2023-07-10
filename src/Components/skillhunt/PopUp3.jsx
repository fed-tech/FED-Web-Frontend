import React, { useState } from "react";
import AttendedEvnt from "./AttendedEvnt";
import NotAttended from "./NotAttended";

function PopUp3({ dataInp, info }) {
  const [attended, setAttended] = useState(false);
  const toggleAttended = () => {
    setAttended(true);
  };
  const toggleNotAttended = () => {
    setAttended(false);
  };
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
        {attended === true && <AttendedEvnt info={info} dataInp={dataInp}/>}
        <h3 className="step-title h3marginTop">
          How did you get to know event this event?
        </h3>
        <div className="inpDivC">
          <div className="radiobgnDiv">
            <input
              onChange={dataInp}
              type="radio"
              id="InstagramFirstTeam"
              name="KnowEventFirstTeam"
              value="Instagram"
              required
              checked={info.KnowEventFirstTeam === "Instagram"}
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
              name="KnowEventFirstTeam"
              value="Email"
              checked={info.KnowEventFirstTeam === "Email"}
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
              name="KnowEventFirstTeam"
              value="Friends"
              checked={info.KnowEventFirstTeam === "Friends"}
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
              name="KnowEventFirstTeam"
              value="Other"
              checked={info.KnowEventFirstTeam === "Other"}
            />
            <label htmlFor="OtherFirstTeam" className="labelTagInp">
              Other
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default PopUp3;
