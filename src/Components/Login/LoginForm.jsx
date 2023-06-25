import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Cookies, useCookies } from "react-cookie";
import bcrypt from "bcryptjs-react";
import { useGoogleLogin } from "@react-oauth/google";
import Swal from "sweetalert2";

//  axios
import axios from "axios";

// state
import AuthContext from "./../../store/auth-context";

// css
import LCss from "./Css/Loginpg.module.css";

// img
import google from "./../../assets/Login/Google.svg";

function LoginForm() {
  const authCtx = useContext(AuthContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [emailerr, setEmailerr] = useState(false);
  const [passwrderr, setPasswrderr] = useState(false);
  const [passwrd, setPassword] = useState("");
  const [isinValid, setIsinValid] = useState(false);
  const [errmssg, setErrMssg] = useState("");
  const [codeResponse, setCodeResponse] = useState();

  useEffect(() => {
    setIsinValid(false);
    setEmailerr(false);
    setPasswrderr(false);
  }, [email, passwrd]);

  const handlelogin = async (e) => {
    e.preventDefault();

    email;
    if (email === "") {
      setEmailerr(true);
    }
    if (passwrd === "") {
      setPasswrderr(true);
    } else {
      try {
        const password = bcrypt.hashSync(passwrd, import.meta.env.VITE_BCRYPT);

        console.log(password);
        console.log(document.cookie);

        const response = await axios.post(`/auth/login`, {
          username: email,
          password,
        });

        console.log(response);

        if (response.status === 202) {
          await authCtx.login(
            response.data.result[0].name,
            response.data.result[0].email,
            response.data.result[0].img,
            response.data.result[0].RollNumber,
            response.data.result[0].School,
            response.data.result[0].College,
            response.data.result[0].MobileNo,
            response.data.result[0].selected,
            Number(response.data.result[0].access),
            response.data.token,
            10800000
          );
          console.log("access->", authCtx.user.access == "0");

          response.data.result[0].access == "0"
            ? navigate("/MyProfile/admin")
            : navigate("/MyProfile/member");

          return;
        }
      } catch (err) {
        setIsinValid(true);

        console.log(err);

        if (err.response.data.code === 4) {
          setErrMssg("Email not verified");
        } else if (err.response.data.code === 2) {
          setErrMssg("Invalid credentials");
        }
        console.log(err);
      }
    }
  };

  const login = useGoogleLogin({
    onSuccess: (response) => setCodeResponse(response),
  });

  useEffect(() => {
    if (codeResponse) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${codeResponse.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${codeResponse.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          const mail = res.data.email;
          console.log(mail);
          axios
            .post("http://localhost:5000/auth/googleverification", {
              email: mail,
            })
            .then((response) => {
              if (response.data.code === 1) {
                const username = response.data.email;
                const password = response.data.password;
                axios
                  .post(`http://localhost:5000/auth/login`, {
                    username,
                    password,
                  })
                  .then((resp) => {
                    authCtx.login(
                      resp.data.result[0].name,
                      resp.data.result[0].email,
                      resp.data.result[0].img,
                      resp.data.result[0].RollNumber,
                      resp.data.result[0].School,
                      resp.data.result[0].College,
                      resp.data.result[0].MobileNo,
                      resp.data.result[0].selected,
                      Number(resp.data.result[0].access),
                      resp.data.token,
                      10800000
                    );

                    {
                      resp.data.result[0].access == "0"
                        ? navigate("/MyProfile/admin")
                        : navigate("/MyProfile/member");
                    }
                    return;
                  });
              } else {
                Swal.fire({
                  icon: "error",
                  title: "Email does not exist",
                  text: "Please signup first",
                  confirmButtonText: "OK",
                  confirmButtonColor: "#f45725",
                  background: "black",
                  color: "white",
                  customClass: {
                    title: "my-title-class",
                    text: "my-text-class",
                  },
                });
                navigate("/signup");
              }
            });
        })
        .catch((err) => console.log(err));
    }
  }, [codeResponse]);

  return (
    <>
      <div className={LCss.googlepart} onClick={() => login()}>
        <img src={google} className={LCss.icon}></img>
        <p className={LCss.log}>Login with Google</p>
      </div>
      <p className={LCss.or}>Or</p>
      <div className={LCss.user}>
        <input
          type="text"
          placeholder="Email"
          className={LCss.username}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            borderBottom: emailerr ? "2px solid red" : "2px solid black",
          }}
        />
      </div>
      <div className={LCss.pass}>
        <input
          type="password"
          placeholder="Password"
          className={LCss.password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            borderBottom: passwrderr ? "2px solid red" : "2px solid black",
          }}
        />
      </div>
      <div className={LCss.forgotPassword}>
        <Link to="/forgotpassword">
          <p>Forgot Password?</p>
        </Link>
      </div>
      <button className={LCss.logtwo} onClick={handlelogin}>
        Login
      </button>
      <div className={LCss.dont}>
        <p className={LCss.signup}>
          Don't have an account?{" "}
          <Link to="/Signup">
            <span className={LCss.spann}>Signup</span>
          </Link>
        </p>
        <p id="errmssg" style={{ color: isinValid ? "red" : "white" }}>
          {errmssg}
        </p>
      </div>
    </>
  );
}

export default LoginForm;
