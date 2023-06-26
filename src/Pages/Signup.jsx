import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import bcrypt from "bcryptjs-react";
import { useGoogleLogin } from "@react-oauth/google";

// axios
import axios from "axios";
// import Swal from "sweetalert2";

// Css
import SuCss from "./Css/Signup.module.css";

// state
import AuthContext from "./../store/auth-context";
import google from "../Img/Google.svg";

import tick from "./../Img/tick.png";
import SignupForm from "../Components/SignupForm";
export default function Signup() {
  const authCtx = useContext(AuthContext);

  const navigate = useNavigate();
  const [isinValid, setIsinValid] = useState(false);
  const [errmssg, setErrMssg] = useState("Invalid");
  const [codeResponse, setCodeResponse] = useState();
  const [modal, setModal] = useState(false);
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
  const toggleModel = () => {
    setModal(!modal);
    navigate("/Login");
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
            <SignupForm showUser = {showUser} setUser = {setUser} setSelected = {setSelected} selected = {selected}/>
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
