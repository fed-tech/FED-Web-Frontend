import React, { useEffect, useState } from "react";
import axios from "axios";
import bcrypt from "bcryptjs-react";
import { Cookies, useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

// Css
import SuCss from "./Css/Signup.module.css";
import { Link } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [emailerr, setEmailerr] = useState(false);
  const [passwrderr, setPasswrderr] = useState(false);
  const [firstNameerr, setfirstnameerr] = useState(false);
  const [lastnameerr, setlastNameerr] = useState(false);
  const [passwrd, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isinValid, setIsinValid] = useState(false);
  const [errmssg, setErrMssg] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  console.log(email);
  console.log(passwrd);
  console.log(firstname);
  console.log(lastName);
  useEffect(() => {
    setIsinValid(false);
    setEmailerr(false);
    setfirstnameerr(false);
    setlastNameerr(false);
    setPasswrderr(false);
  }, [email, passwrd, firstname, lastName]);
  const handleSignUp = async (e) => {
    e.preventDefault();
    if (firstname === "") {
      setfirstnameerr(true);

    }
    if (lastName === "") {
      setlastNameerr(true);

    }
    if (email === "") {
      setEmailerr(true);

    }
    if (passwrd === "") {
      setPasswrderr(true);

    } else {
      try {
        const name = firstname + " " + lastName;
        const password = bcrypt.hashSync(
          passwrd,
          "$2b$10$Q0RPeouqYdTToq76zoccIO"
        );
        console.log("hashed password is:", password);
        console.log("Name is:", name);
        const response = await axios.post(
          `http://localhost:5000/auth/register`,
          {
            email,
            password,
            name,
          }
        );
        const success = response.status === 200;
        if (success) {
          navigate("/Login");
        } else {
          setIsinValid(true);
          setErrMssg("Invalid credentials");
        }
      } catch (error) {
        setIsinValid(true);
        setErrMssg("Unwanted errors");
        console.log(error);
      }
    }
  };
  return (
    <div className={SuCss.mDiv}>
      <div className={SuCss.glassDiv}>
        <p className={SuCss.FED}>FED</p>
        <div className={SuCss.wFFFDiv}>
          <div className={SuCss.helloDiv}> Hello There</div>
          <p className={SuCss.plsDiv}> Please enter Your Details</p>

          <div className={SuCss.googleDiv}>
            {/* <svg
                      className="logo"
                      width="17.1"
                      height="17.1"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_264_8297)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M17.5596 9.44466C17.5596 8.83839 17.5052 8.25544 17.4041 7.6958H9.35156V11.0031H13.953C13.7548 12.0718 13.1524 12.9774 12.2469 13.5836V15.7289H15.0101C16.6268 14.2404 17.5596 12.0485 17.5596 9.44466Z"
                          fill="#4285F4"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.34958 17.8005C11.6581 17.8005 13.5935 17.0349 15.0081 15.7291L12.2449 13.5838C11.4793 14.0968 10.4999 14.3999 9.34958 14.3999C7.12269 14.3999 5.2378 12.8959 4.56546 10.875H1.70898V13.0902C3.11585 15.8845 6.0073 17.8005 9.34958 17.8005Z"
                          fill="#34A853"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4.56667 10.8749C4.39567 10.3619 4.29851 9.81389 4.29851 9.25037C4.29851 8.68685 4.39567 8.13887 4.56667 7.62587V5.41064H1.71019C1.13112 6.56489 0.800781 7.87071 0.800781 9.25037C0.800781 10.63 1.13112 11.9358 1.71019 13.0901L4.56667 10.8749Z"
                          fill="#FBBC05"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.34957 4.10076C10.6049 4.10076 11.7319 4.53215 12.618 5.37938L15.0703 2.92708C13.5896 1.54742 11.6542 0.700195 9.34957 0.700195C6.0073 0.700195 3.11585 2.61617 1.70898 5.41047L4.56546 7.6257C5.2378 5.60479 7.12269 4.10076 9.34957 4.10076Z"
                          fill="#EA4335"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_264_8297">
                          <rect
                            width="17.1"
                            height="17.1"
                            fill="white"
                            transform="translate(0.800781 0.700195)"
                          />
                        </clipPath>
                      </defs>
            </svg> */}
            <p className={SuCss.googleText}>SignUp with Google</p>
          </div>

          <p className={SuCss.OrText}>Or</p>
          <div className={SuCss.form}>
            <input
              id="first_name"
              type="text"
              placeholder="First name"
              onChange={(e) => setFirstName(e.target.value)}
              style={{
                borderBottom: firstNameerr
                  ? "2px solid red"
                  : "2px solid black",
              }}
            />
            <input
              type="text"
              id="last_name"
              placeholder="Last name"
              onChange={(e) => setLastName(e.target.value)}
              style={{
                borderBottom: lastnameerr ? "2px solid red" : "2px solid black",
              }}
            />
            <input
              type="email"
              id="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              style={{
                borderBottom: emailerr ? "2px solid red" : "2px solid black",
              }}
            />
            <input
              type="password"
              id="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              style={{
                borderBottom: passwrderr ? "2px solid red" : "2px solid black",
              }}
            />
            <button type="submit" className={SuCss.btn} onClick={handleSignUp}>
              SignUp
            </button>
            <p className={SuCss.member}>
              Already a member?{" "}
              <Link to="/Login">
                <span>Login</span>
              </Link>
            </p>
            <p
              className={SuCss.signupErrDiv}
              style={{ visibility: isinValid ? "visible" : "hidden" }}
            >
              {errmssg}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
