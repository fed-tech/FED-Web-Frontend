import React, { useEffect } from "react";
import PropTypes from "prop-types";

// css
import CPCss from "./css/CompleteProfile.module.css";

// icons
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function CompleteProfile(props) {
  const DataInp = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (value === "") {
      e.target.style.borderBottom = "1px solid  #FF0000";
      e.target.style.outline = "none";
    } else {
      e.target.style.borderBottom = "1px solid  black";
    }
    if (name === "MobileNo") {
      if (value.length > 12 || value.length < 10) {
        e.target.style.borderBottom = "1px solid  #FF0000";
        e.target.style.outline = "none";
      } else {
        e.target.style.borderBottom = "1px solid  black";
      }
    }
    setUser({ ...showUser, [name]: value });
    console.log(showUser);
  };
  return (
    <div
      className={CPCss.mDiv}
      id="showCreate"
      // id={Object.keys(props.data).length > 0 ? "showCreate" : "hideCreate"}
    >
      <div className={CPCss.mDivCon}>
        <ArrowBackIcon
          className={CPCss.ArrowBackIcon}
          onClick={() => props.set(false)}
        />
        <div>
          <p className={CPCss.CreateProfile}>Create Profile</p>
          <p className={CPCss.Please}>Please enter Your Details</p>
        </div>

        <div className={CPCss.WhiteBackGround}>
          <form className={CPCss.FormTag}>
            <input
              type="text"
              id="college"
              className={CPCss.inpTag}
              name="College"
              placeholder="College"
              onChange={DataInp}
            />
            <div className={CPCss.rowInpDiv}>
              <input
                type="number"
                id="rollNum"
                className={CPCss.inpTag}
                name="RollNumber"
                placeholder="Roll Number"
                onChange={DataInp}
              />
              <input
                type="text"
                id="school"
                className={CPCss.inpTag}
                name="School"
                placeholder="School"
                onChange={DataInp}
              />
            </div>

            <input
              type="number"
              id="number"
              className={CPCss.inpTag}
              name="MobileNo"
              placeholder="Mobile Number"
              onChange={DataInp}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

CompleteProfile.propTypes = {};

export default CompleteProfile;
