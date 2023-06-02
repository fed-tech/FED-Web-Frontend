import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import bcrypt from "bcryptjs-react";
import { useGoogleLogin } from '@react-oauth/google';

// axios
import axios from "axios";
// import Swal from "sweetalert2";

// Css
import SuCss from "./Css/Signup.module.css";

// state
import AuthContext from "./../store/auth-context";
import google from "../Img/Google.svg";

import tick from "./../Img/tick.png";
export default function Signup() {
  const authCtx = useContext(AuthContext);

  const navigate = useNavigate();

  const [emailerr, setEmailerr] = useState(false);
  const [passwrderr, setPasswrderr] = useState(false);
  const [firstNameerr, setfirstnameerr] = useState(false);
  const [lastnameerr, setlastNameerr] = useState(false);
  const [isinValid, setIsinValid] = useState(false);
  const [errmssg, setErrMssg] = useState("Invalid");
  const [codeResponse,setCodeResponse] = useState();
  const [modal,setModal] = useState(false);

  const options = [
    { value: "", text: "Year" },
    { value: "1st", text: "1st year" },
    { value: "2nd", text: "2nd year" },
    { value: "3rd", text: "3rd year" },
    { value: "4th", text: "4th year" },
    { value: "5th", text: "5th year" },
  ];

  const [showUser, setUser] = useState({
    email: "",
    Password: "",
    FirstName: "",
    LastName: "",
    RollNumber: "",
    School: "",
    College: "",
    MobileNo: "",
  });

  const [selected, setSelected] = useState(options[0].value);

  const handleChange = (event) => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  const DataInp = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "email") {
      if (value.indexOf("@") === -1 || value.indexOf(".") === -1) {
        e.target.style.borderBottom = "2px solid  #FF0000";
        e.target.style.outline = "none";
      } else {
        e.target.style.borderBottom = "2px solid  black";
      }
    } else if (value === "") {
      e.target.style.borderBottom = "2px solid  #FF0000";
      e.target.style.outline = "none";
    }

    if (name === "Password") {
      if (value === "") {
        e.target.style.borderBottom = "2px solid  #FF0000";
        e.target.style.outline = "none";
      } else {
        e.target.style.borderBottom = "2px solid  black";
      }
    }
    if (name === "FirstName") {
      if (value === "") {
        e.target.style.borderBottom = "2px solid  #FF0000";
        e.target.style.outline = "none";
      } else {
        e.target.style.borderBottom = "2px solid  black";
      }
    }
    if (name === "LastName") {
      if (value === "") {
        e.target.style.borderBottom = "2px solid  #FF0000";
        e.target.style.outline = "none";
      } else {
        e.target.style.borderBottom = "2px solid  black";
      }
    }
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


  const login = useGoogleLogin({
    onSuccess:(response)=>setCodeResponse(response)
  })

  useEffect(()=>{
    
    if (codeResponse) {
      axios
          .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${codeResponse.access_token}`, {
              headers: {
                  Authorization: `Bearer ${codeResponse.access_token}`,
                  Accept: 'application/json'
              }
          })
          .then((res) => {
              localStorage.setItem('user',JSON.stringify(res.data));
              navigate('/createprofile');

          })
          .catch((err) => console.log(err));
  }
},[codeResponse]);


  

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
      MobileNo.length<=12 &&
      MobileNo.length>=10 &&
      email !== "" &&
      Password !== "" &&
      selected !== "Year"
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
          // Swal.fire({
          //   icon: "success",
          //   title: "SignuUp Successfully",
          //   text: "Please check your mail",
          //   confirmButtonText: "ok",
          //   confirmButtonColor: "#f45725",
          //   SwalModalColor: "black",
          // });
          setModal(!modal);
          // navigate("/Login");
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
  const toggleModel = () => {
    setModal(!modal);
  };
  return (
    <div className={SuCss.mDiv}>
      <div className={SuCss.glassDiv}>
        <p className={SuCss.FED}>FED</p>
        <div className={SuCss.wFFFDiv}>
          <div className={SuCss.helloDiv}> Hello There</div>
          <p className={SuCss.plsDiv}> Please enter Your Details</p>

          <div className={SuCss.googleDiv} onClick={() => login()}>
            <img src={google} className="icon"></img>
            <p className={SuCss.googleText}>SignUp with google</p>
              
          </div>

          <p className={SuCss.OrText}>Or</p>
          <div className={SuCss.form}>
            <input
              id="first_name"
              type="text"
              name="FirstName"
              placeholder="First Name"
              onChange={DataInp}
              style={{
                borderBottom: firstNameerr
                  ? "2px solid red"
                  : "2px solid black",
              }}
            />
            <input
              type="text"
              id="last_name"
              name="LastName"
              placeholder="Last Name"
              onChange={DataInp}
              style={{
                borderBottom: lastnameerr ? "2px solid red" : "2px solid black",
              }}
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              onChange={DataInp}
              style={{
                borderBottom: emailerr ? "2px solid red" : "2px solid black",
              }}
            />
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
            <input
              type="password"
              id="password"
              name="Password"
              placeholder="Password"
              onChange={DataInp}
              style={{
                borderBottom: passwrderr ? "2px solid red" : "2px solid black",
              }}
            />
            <select
              value={selected}
              onChange={handleChange}
              className={SuCss.year}
            >
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
            <button type="submit" className={SuCss.btn} onClick={handleSignUp}>
              SignUp
            </button>
            <p className={SuCss.member}>
              Already a member?{" "}
              <Link to="/Login">
                <span className={SuCss.spn}>Login</span>
              </Link>
            </p>
            <p
              className={SuCss.signupErrDiv}
              style={{ color: isinValid ? "red" : "white" }}
            >
              {errmssg}
            </p>
          </div>
        </div>
      </div>
      {modal && (
        <div className={SuCss.modal}>
          <div className={SuCss.modalcontent}>
            <img src={tick}></img>
            <h2>SignUp Successfully!</h2>
            <h3>Please check your mail !!</h3>
            <button className={SuCss.ok} onClick={toggleModel}>
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
