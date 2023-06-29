import React, { useContext, useEffect, useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import bcrypt from "bcryptjs-react";
import { useGoogleLogin } from "@react-oauth/google";

// Components
import Or from "./../Login/Or";

// axios
import axios from "axios";

// Css
import SuCss from "./css/Signup.module.css";

// state
import AuthContext from "../../store/auth-context";

import google from "./../../assets/Login/Google.svg";

function SignupForm() {
  const [showUser, setUser] = useState({
    email: "",
    Password: "",
    FirstName: "",
    LastName: "",
    RollNumber: "",
    School: "",
    College: "",
    MobileNo: "+91",
  });
  const [selected, setSelected] = useState("");
  const authCtx = useContext(AuthContext);

  const navigate = useNavigate();
  const [isinValid, setIsinValid] = useState(false);
  const [errmssg, setErrMssg] = useState("Invalid");
  const [codeResponse, setCodeResponse] = useState();
  const [DropShow, hideDrop] = useState(false);

  let menu = useRef();

  const login = useGoogleLogin({
    onSuccess: (response) => setCodeResponse(response),
  });

  const loginWithGoogle = async () => {
    try {
      const googleResponse = await axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${codeResponse.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${codeResponse.access_token}`,
            Accept: "application/json",
          },
        }
      );
      const mail = googleResponse.data.email;
      const response = await axios.post(
        "http://localhost:5000/auth/googleverification",
        {
          email: mail,
        }
      );
      console.log(response);
      if (response.status === 202) {
        authCtx.login(
          response.data.user.name,
          response.data.user.email,
          response.data.user.img,
          response.data.user.RollNumber,
          response.data.user.School,
          response.data.user.College,
          response.data.user.MobileNo,
          response.data.user.selected,
          Number(response.data.user.access),
          response.data.token,
          10800000
        );
        navigate("/MyProfile");
        return;
      } else {
        localStorage.setItem("user", JSON.stringify(googleResponse.data));
        navigate("/createprofile");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (codeResponse) {
      loginWithGoogle();
    }
  }, [codeResponse]);

  useEffect(() => {
    setIsinValid(false);
  }, [showUser, selected]);

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
      selected !== ""
    ) {
      const password = bcrypt.hashSync(
        Password,
        "$2b$10$Q0RPeouqYdTToq76zoccIO"
      );
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
        const response = await axios.post(
          `http://localhost:5000/auth/register`,
          userObject
        );
        const success = response.status === 200;
        if (success) {
          setModal(!modal);
        }
      } catch (error) {
        setIsinValid(true);
        if (error.response.data.code === 1) {
          setErrMssg("User already exists");
        }
        if (error.response.data.code === 2) {
          setErrMssg("Invalid email format");
        }

        console.log(error);
      }
    } else {
      if (MobileNo === "" || (MobileNo.length <= 12 && MobileNo.length >= 10)) {
        setIsinValid(true);
        setErrMssg("Please fill all the fields");
      } else {
        setIsinValid(true);
        setErrMssg("Invalid mobile number");
      }
    }
  };

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
        e.target.style.borderBottom = "1px solid  #FF0000";
        e.target.style.outline = "none";
      } else {
        e.target.style.borderBottom = "1px solid  black";
      }
    }

    if (name == "College") {
      let changeDrop = "Kalinga Institute of Industrial Technology"
        .toLowerCase()
        .includes(value);

      if (changeDrop) {
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

    setUser({ ...showUser, [name]: value });
  };

  useEffect(() => {
    document.addEventListener("mousedown", handler);
  });

  const handler = (e) => {
    if (!menu.current.contains(e.target)) {
      hideDrop(false);
    }
  };

  return (
    <>
      <div className={SuCss.googleDiv} onClick={() => login()}>
        <img src={google} className="icon"></img>
        <p className={SuCss.googleText}>SignUp with google</p>
      </div>

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
              onChange={DataInp}
              onFocus={() => {
                hideDrop(true);
              }}
              spellcheck="true"
              autocomplete="off"
              required
            />
            <div
              className={SuCss.DropDownmDiv}
              id={DropShow ? "showDropMenuClg" : "hideDropMenuClg"}
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

          <button type="submit" className={SuCss.btn} onClick={handleSignUp}>
            SignUp
          </button>
        </form>

        <p className={SuCss.member}>
          Already a member?{" "}
          <Link to="/Login" className="LinkStyle">
            <span className={SuCss.spn}>Login</span>
          </Link>
        </p>
        {/* <p
          className={SuCss.signupErrDiv}
          style={{ color: isinValid ? "red" : "white" }}
        >
          {errmssg}
        </p> */}
      </div>
    </>
  );
}

export default SignupForm;
