
import React, { useContext, useEffect, useState } from "react";
import "./cssp/UpdateModal.css";
import AuthContext from "../../store/auth-context";


function UpdateProfileForm({showUser, setUser, selected, setSelected}) {
    const authCtx = useContext(AuthContext);
    const options = [
        // { value: "", text: "Year" },
        { value: "1st", text: "1st year" },
        { value: "2nd", text: "2nd year" },
        { value: "3rd", text: "3rd year" },
        { value: "4th", text: "4th year" },
        { value: "5th", text: "5th year" },
      ];
    const handleChange = (event) => {
        console.log(event.target.value);
        setSelected(event.target.value);
      };
      const DataInp = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if (value === "") {
          e.target.style.borderBottom = "2px solid  #FF0000";
          e.target.style.outline = "none";
        } else {
          e.target.style.borderBottom = "2px solid  black";
        }
        if (name === "MobileNo") {
          if (value.length > 12 || value.length < 10) {
            e.target.style.borderBottom = "2px solid  #FF0000";
            e.target.style.outline = "none";
          } else {
            e.target.style.borderBottom = "2px solid  #767676";
          }
        }
        setUser({ ...showUser, [name]: value });
        console.log(showUser);
      };
  return (
    <>
      <input
        type="text"
        id="name"
        name="name"
        value={authCtx.user.name}
        placeholder="Name"
        onChange={DataInp}
      />
      <input
        type="text"
        id="rollNum"
        name="RollNumber"
        value={authCtx.user.rollNo}
        placeholder="Roll Number"
        onChange={DataInp}
      />
      <input
        type="text"
        id="school"
        name="School"
        value={authCtx.user.school}
        placeholder="School"
        onChange={DataInp}
      />
      <input
        type="text"
        id="college"
        name="College"
        value={authCtx.user.college}
        placeholder="College"
        onChange={DataInp}
      />
      <input
        type="number"
        id="number"
        name="MobileNo"
        value={authCtx.user.mobileNo}
        placeholder="Mobile Number"
        onChange={DataInp}
      />
      <select
        value={selected}
        onChange={handleChange}
        className="year"
        placeholder="Year"
        id="year"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </>
  );
}

export default UpdateProfileForm;
