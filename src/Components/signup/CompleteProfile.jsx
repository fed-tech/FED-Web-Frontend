import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// css
import CPCss from "./css/CompleteProfile.module.css";

// icons
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function CompleteProfile(props) {
  const [selected, setSelected] = useState("");

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

  const handleChange = (event) => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  const options = [
    { value: "1st", text: "1st year" },
    { value: "2nd", text: "2nd year" },
    { value: "3rd", text: "3rd year" },
    { value: "4th", text: "4th year" },
    { value: "5th", text: "5th year" },
  ];

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

            <select
              value={selected}
              onChange={handleChange}
              className={CPCss.year}
            >
              <option hidden>Year</option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
          </form>
        </div>
      </div>
    </div>
  );
}

CompleteProfile.propTypes = {};

export default CompleteProfile;
