import React from "react";
import SuCss from "../Pages/Css/Signup.module.css";

function SignupForm({ showUser, setUser, setSelected, selected }) {
  const options = [
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

    if (name === "email") {
      if (value.indexOf("@") === -1 || value.indexOf(".") === -1) {
        e.target.style.borderBottom = "2px solid  #FF0000";
        e.target.style.outline = "none";
      } else {
        e.target.style.borderBottom = "2px solid  black";
      }
    }
    if (name === "MobileNo") {
      if (value.length > 12 || value.length < 10) {
        e.target.style.borderBottom = "2px solid  #FF0000";
        e.target.style.outline = "none";
      } else {
        e.target.style.borderBottom = "2px solid  black";
      }
    }
    setUser({ ...showUser, [name]: value });
    console.log(showUser);
  };
  return (
    <div>
      <input
        id="first_name"
        type="text"
        name="FirstName"
        placeholder="First Name"
        onChange={DataInp}
      />
      <input
        type="text"
        id="last_name"
        name="LastName"
        placeholder="Last Name"
        onChange={DataInp}
      />
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        onChange={DataInp}
      />
      <input
        type="text"
        id="rollNum"
        name="RollNumber"
        placeholder="Roll Number"
        onChange={DataInp}
      />
      <input
        type="text"
        id="school"
        name="School"
        placeholder="School"
        onChange={DataInp}
      />
      <input
        type="text"
        id="college"
        name="College"
        placeholder="College"
        onChange={DataInp}
      />
      <div className={SuCss.mobileno_container}>
        <p>+91</p>
        <input
          type="number"
          id="number"
          name="MobileNo"
          placeholder="Mobile Number"
          onChange={DataInp}
        />
      </div>
      <input
        type="password"
        id="password"
        name="Password"
        placeholder="Password"
        onChange={DataInp}
      />
      <select value={selected} onChange={handleChange} className={SuCss.year}>
        <option hidden> Year</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SignupForm;
