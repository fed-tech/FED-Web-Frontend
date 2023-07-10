import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import bcrypt from "bcryptjs-react";

// Components
import Or from "./../Login/Or";
import GoogleSignUp from "./GoogleSignUp";
import Load from "./../../MicroInterAction/Load";
import { Alert } from "./../../MicroInterAction/Alert";

// axios
import axios from "axios";

// Css
import SuCss from "./css/Signup.module.css";

function SignupForm() {
  const [loadingEffect, setLoad] = useState(false);
  const [selected, setSelected] = useState("");
  const [DropShow, hideDrop] = useState(false);
  const [showUser, setUser] = useState({
    email: "",
    Password: "",
    FirstName: "",
    LastName: "",
    RollNumber: "",
    School: "",
    College: "",
    MobileNo: "+91",
    tandC: false,
  });

  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });

  const options = [
    { value: "1st", text: "1st year" },
    { value: "2nd", text: "2nd year" },
    { value: "3rd", text: "3rd year" },
    { value: "4th", text: "4th year" },
    { value: "5th", text: "5th year" },
  ];

  let menu = useRef();

  const handleSignUp = async (e) => {
    e.preventDefault();

    const {
      email,
      Password,
      FirstName,
      LastName,
      RollNumber,
      School,
      College,
      MobileNo,
      tandC,
    } = showUser;

    const name = FirstName + " " + LastName;

    if (
      name !== "" &&
      RollNumber !== "" &&
      School !== "" &&
      College !== "" &&
      MobileNo !== "" &&
      MobileNo.length <= 12 &&
      MobileNo.length >= 10 &&
      email !== "" &&
      Password !== "" &&
      selected !== "" &&
      tandC
    ) {
      setLoad(true);

      const password = bcrypt.hashSync(Password, import.meta.env.VITE_BCRYPT);

      const userObject = {
        name,
        email,
        password,
        RollNumber,
        School,
        College,
        MobileNo,
        selected,
      };

      try {
        const response = await axios.post(`/auth/register`, userObject);

        if (response.status === 200) {
          setLoad(false);

          setError({
            mainColor: "#E5F6FD",
            secondaryColor: "#1AB1F5",
            symbol: "info",
            title: "Information",
            text: "Please check your mail",
            val: true,
          });
        }
      } catch (error) {
        setLoad(false);

        console.log(error);

        console.log(error.response.data.code === 1);

        if (error.response.data.code === 1) {
          setError({
            mainColor: "#FFC0CB",
            secondaryColor: "#FF69B4",
            symbol: "pets",
            title: "Check it out",
            text: "User already exists",
            val: true,
          });

          return;
        }
        if (error.response.data.code === 2) {
          setError({
            mainColor: "#FFF4E5",
            secondaryColor: "#FFA117",
            symbol: "warning",
            title: "Warning",
            text: "Invalid email format",
            val: true,
          });
          return;
        } else {
          setError({
            mainColor: "#FDEDED",
            secondaryColor: "#F16360",
            symbol: "error",
            title: "Error",
            text: "An Unexpected Error Occurred",
            val: true,
          });
          return;
        }
      }
    } else {
      setLoad(false);

      if (MobileNo === "" || (MobileNo.length <= 12 && MobileNo.length >= 10)) {
        setError({
          mainColor: "#FFC0CB",
          secondaryColor: "#FF69B4",
          symbol: "pets",
          title: "Check it out",
          text: "Please Fill All The Details",
          val: true,
        });
      } else {
        setError({
          mainColor: "#FFF4E5",
          secondaryColor: "#FFA117",
          symbol: "warning",
          title: "Warning",
          text: "Invalid mobile number",
          val: true,
        });
      }
      if (tandC != true) {
        setError({
          mainColor: "#FFF4E5",
          secondaryColor: "#FFA117",
          symbol: "warning",
          title: "Warning",
          text: "Please accept the terms and condition",
          val: true,
        });
      }
    }
  };

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  const DataInp = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (value === "") {
      e.target.style.borderBottom = "1px solid  #FF0000";
      e.target.style.outline = "none";
    } else {
      e.target.style.borderBottom = "1px solid  black";
    }

    if (name === "email") {
      if (value.indexOf("@") === -1 || value.indexOf(".") === -1) {
        e.target.style.borderBottom = "1px solid  #FF0000";
        e.target.style.outline = "none";
      } else {
        e.target.style.borderBottom = "1px solid  black";
      }
    }

    if (name === "MobileNo") {
      if (value.length == 10) {
        e.target.style.borderBottom = "1px solid  black";
      } else {
        e.target.style.outline = "none";
        e.target.style.borderBottom = "1px solid  #FF0000";
      }
    }

    if (name == "College") {
      if (
        "Kalinga Institute of Industrial Technology"
          .toLowerCase()
          .includes(value)
      ) {
        hideDrop(true);
      } else {
        hideDrop(false);
      }

      if (value === "") {
        hideDrop(false);
        e.target.style.borderBottom = "1px solid  #FF0000";
        e.target.style.outline = "none";
      } else {
        e.target.style.borderBottom = "1px solid  black";
      }
    }
    if (name === "tandC") {
      setUser({ ...showUser, tandC: e.target.checked });
    } else {
      setUser({ ...showUser, [name]: value });
    }
    // setUser({ ...showUser, [name]: value });
  };

  useEffect(() => {
    if (DropShow) {
      document.addEventListener("mousedown", handler);
    }
  });

  const handler = (e) => {
    try {
      if (!menu.current.contains(e.target)) {
        hideDrop(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const DropCheck = () => {
    if (
      "Kalinga Institute of Industrial Technology"
        .toLowerCase()
        .includes(showUser.College)
    ) {
      hideDrop(true);
    }
  };

  return (
    <>
      <GoogleSignUp setLoad={setLoad} />
      <Or />

      <div className={SuCss.form}>
        <form>
          {/* Name */}
          <div className={SuCss.nameInpDiv}>
            <input
              id="first_name"
              type="text"
              name="FirstName"
              placeholder="First Name"
              className={SuCss.inpTag}
              onChange={DataInp}
              required
            />
            <input
              type="text"
              id="last_name"
              name="LastName"
              placeholder="Last Name"
              className={SuCss.inpTag}
              onChange={DataInp}
              required
            />
          </div>

          {/* email */}
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className={SuCss.inpTag}
            onChange={DataInp}
            required
          />

          {/* Phone Number */}
          <div className={SuCss.mobileno_container}>
            <p className={SuCss.mobileno91}>+91</p>
            <input
              type="number"
              id="number"
              name="MobileNo"
              placeholder="Mobile Number"
              className={SuCss.inpTag}
              onChange={DataInp}
              required
            />
          </div>

          {/* College */}
          <div ref={menu} className={SuCss.CollegeInpmDIv}>
            <input
              type="text"
              id="college"
              name="College"
              placeholder="College"
              className={SuCss.inpTag}
              value={showUser.College}
              onChange={DataInp}
              onFocus={() => {
                DropCheck();
              }}
              spellcheck="true"
              autocomplete="off"
              required
            />
            <div
              className={SuCss.DropDownmDiv}
              id={DropShow ? "showDropMenuClg" : "hideDropMenuClg"}
              onClick={() => {
                setUser({
                  ...showUser,
                  College: "Kalinga Institute of Industrial Technology",
                });
                hideDrop(false);
              }}
            >
              Kalinga Institute of Industrial Technology
            </div>
          </div>

          {/* School */}
          <input
            type="text"
            id="school"
            name="School"
            placeholder="School"
            className={SuCss.inpTag}
            onChange={DataInp}
            required
          />

          {/* Roll Number */}
          <input
            type="text"
            id="rollNum"
            name="RollNumber"
            placeholder="Roll Number"
            className={SuCss.inpTag}
            onChange={DataInp}
            required
          />

          {/* Year */}
          <select
            value={selected}
            onChange={handleChange}
            required
            className={SuCss.year}
          >
            <option hidden> Year</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>

          {/* Password */}
          <input
            type="password"
            id="password"
            name="Password"
            placeholder="Password"
            className={SuCss.inpTag}
            onChange={DataInp}
            required
          />

          {/* T&C */}
          <div className={SuCss.tandCDiv}>
            <input
              type="checkbox"
              name="tandC"
              id="tandC"
              checked={setUser.tandC}
              onChange={DataInp}
              required
            />
            <label htmlFor="tandC" className={SuCss.acceptLabel}>
              I agree to FED's{" "}
              <Link to="/T&C" className="LinkStyle" target="_blank">
                Terms and Conditions
              </Link>{" "}
              and{" "}
              <Link to="/PrivacyPolicies" className="LinkStyle" target="_blank">
                Privacy Policy
              </Link>
              .
            </label>
          </div>

          <button type="submit" className={SuCss.btn} onClick={handleSignUp}>
            {loadingEffect ? <Load /> : "SignUp"}
          </button>
        </form>

        <p className={SuCss.member}>
          Already a member?{" "}
          <Link to="/Login" className="LinkStyle">
            <span className={SuCss.spn}>Login</span>
          </Link>
        </p>
      </div>

      <Alert variant={variants} val={setError} />
    </>
  );
}

export default SignupForm;
