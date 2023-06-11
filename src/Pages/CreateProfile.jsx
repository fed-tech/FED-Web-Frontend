import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import bcrypt from "bcryptjs-react";

// axios
import axios from "axios";
import Swal from "sweetalert2";

// Css
import SuCss from "./Css/CreateProfile.module.css";

// state
import AuthContext from "./../store/auth-context";

export default function CreateProfile() {
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  const authCtx = useContext(AuthContext);

  const navigate = useNavigate();

  const [emailerr, setEmailerr] = useState(false);
  const [passwrderr, setPasswrderr] = useState(false);
  const [firstNameerr, setfirstnameerr] = useState(false);
  const [lastnameerr, setlastNameerr] = useState(false);
  const [isinValid, setIsinValid] = useState(false);
  const [errmssg, setErrMssg] = useState("Invalid");

  const options = [
    { value: "1st", text: "1st year" },
    { value: "2nd", text: "2nd year" },
    { value: "3rd", text: "3rd year" },
    { value: "4th", text: "4th year" },
    { value: "5th", text: "5th year" },
  ];
  const [showUser, setUser] = useState({
    email: "",
    Password: "",
    name: "",
    RollNumber: "",
    School: "",
    College: "",
    MobileNo: "",
    img: "",
  });

  const [selected, setSelected] = useState("");

  const handleChange = (event) => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  const DataInp = (e) => {
    const name = e.target.name;
    const value = e.target.value;


    if (name === "RollNumber") {
      if (value === "") {
        e.target.style.borderBottom = "2px solid  #FF0000";
        e.target.style.outline = "none";
      } else {
        e.target.style.borderBottom = "2px solid  black";
      }
    }
    if (name === "School") {
      if (value === "") {
        e.target.style.borderBottom = "2px solid  #FF0000";
        e.target.style.outline = "none";
      } else {
        e.target.style.borderBottom = "2px solid  black";
      }
    }
    if (name === "College") {
      if (value === "") {
        e.target.style.borderBottom = "2px solid  #FF0000";
        e.target.style.outline = "none";
      } else {
        e.target.style.borderBottom = "2px solid  black";
      }
    }
    if (name === "MobileNo") {
      if (value === "" || value.length > 12 || value.length < 10) {
        e.target.style.borderBottom = "2px solid  #FF0000";
        e.target.style.outline = "none";
      } else {
        e.target.style.borderBottom = "2px solid  black";
      }
    }
    if (name === "Year") {
      if (value === "") {
        e.target.style.borderBottom = "2px solid  #FF0000";
        e.target.style.outline = "none";
      } else {
        e.target.style.borderBottom = "2px solid  black";
      }
    }

    setUser({ ...showUser, [name]: value });
    console.log(showUser);
  };

  useEffect(() => {
    setIsinValid(false);
  }, [showUser, selected]);

  const handleCreateProfile = async (e) => {
    e.preventDefault();
    const profile = JSON.parse(localStorage.getItem('user'));
    showUser.email = profile.email;
    showUser.Password = profile.id;
    showUser.name = profile.name;
    showUser.img = profile.picture;
    const {
      email,
      Password,
      name,
      RollNumber,
      School,
      College,
      MobileNo,
      img,
    } = showUser;
    

    const password = bcrypt.hashSync(
      Password,
      "$2b$10$Q0RPeouqYdTToq76zoccIO"
    );
    if (
      name !== "" &&
      RollNumber !== "" &&
      Password !== ""&&
      School !== "" &&
      College !== "" &&
      MobileNo !== "" &&
      MobileNo.length<=12 &&
      MobileNo.length>=10 &&
      email !== "" &&
      selected !== ""&&
      img != ""
    ) {
      const userObject = {
        name,
        email,
        password,
        RollNumber,
        School,
        College,
        MobileNo,
        selected,
        img,
      };
      console.log("user object: ",userObject);
      try {
        const response = await axios.post(
          `http://localhost:5000/auth/googleregister`,
          userObject
        );
        const success = response.status === 200;
        if (success) {
          const username = userObject.email;
          const password = userObject.password;
          axios.post(`http://localhost:5000/auth/login`, {
            username,
            password,
          }).then((res)=>{
            authCtx.login(
              res.data.result[0].name,
              res.data.result[0].email,
              res.data.result[0].img,
              res.data.result[0].RollNumber,
              res.data.result[0].School,
              res.data.result[0].College,
              res.data.result[0].MobileNo,
              res.data.result[0].selected,
              Number(res.data.result[0].access),
              res.data.token,
              10800000
            );
            navigate("/MyProfile");
            return;

          })
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
      if(MobileNo === "" || (MobileNo.length<=12 && MobileNo.length>=10))
      {

        setIsinValid(true);
        setErrMssg("Please fill all the fields");
      }
      else{
        setIsinValid(true);
        setErrMssg("Invalid mobile number")
      }
    }
  };
  return (
    <div className={SuCss.mDiv}>
      <div className={SuCss.glassDiv}>
        <p className={SuCss.FED}>FED</p>
        <div className={SuCss.wFFFDiv}>
          <div className={SuCss.helloDiv}> Create Profile</div>
          <p className={SuCss.plsDiv}> Please enter Your Details</p>
          <div className={SuCss.form}>
            <input
              type="text"
              id="rollNum"
              name="RollNumber"
              placeholder="Roll Number"
              onChange={DataInp}
              style={{
                borderBottom: emailerr ? "2px solid red" : "2px solid black",
              }}
            />
            <input
              type="text"
              id="school"
              name="School"
              placeholder="School"
              onChange={DataInp}
              style={{
                borderBottom: emailerr ? "2px solid red" : "2px solid black",
              }}
            />
            <input
              type="text"
              id="college"
              name="College"
              placeholder="College"
              onChange={DataInp}
              style={{
                borderBottom: emailerr ? "2px solid red" : "2px solid black",
              }}
            />
            <input
              type="number"
              id="number"
              name="MobileNo"
              placeholder="Mobile Number"
              onChange={DataInp}
              style={{
                borderBottom: emailerr ? "2px solid red" : "2px solid black",
              }}
            />
            <select
              value={selected}
              onChange={handleChange}
              className={SuCss.year}
            >
              <option hidden>Year
                </option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
            <button type="submit" className={SuCss.btn} onClick={handleCreateProfile}>
              Create Profile
            </button>
            <p
              className={SuCss.signupErrDiv}
              style={{ color: isinValid ? "red" : "white" }}
            >
              {errmssg}
            </p>
          </div>
        </div>
      </div>
    </div>
    
  );
}

