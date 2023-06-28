import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs-react";
import { useGoogleLogin } from "@react-oauth/google";

//css
import Lcss from "./css/loginpg.module.css";

//  axios
import axios from "axios";

// state
import AuthContext from "../../store/auth-context";

// img
import google from "./../../assets/Login/Google.svg";
// import Swal from "sweetalert2";

function LoginForm() {
  const authCtx = useContext(AuthContext);

  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    passwrd: "",
  });

  const [isinValid, setIsinValid] = useState(false);
  const [errmssg, setErrMssg] = useState("Invalid");
  const [codeResponse, setCodeResponse] = useState();

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

    setUser({ ...user, [name]: value });
    console.log(user);
  };

  const { email, passwrd } = user;

  const handlelogin = async (e) => {
    e.preventDefault();

    const username = email;
    if (email != "" && passwrd != "") {
      try {
        const password = bcrypt.hashSync(
          passwrd,
          "$2b$10$Q0RPeouqYdTToq76zoccIO"
        );

        const response = await axios.post(`http://localhost:5000/auth/login`, {
          username,
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
          console.log("access->", response.data.result[0].access == "0");

          navigate("/MyProfile");

          return;
        }
      } catch (err) {
        setIsinValid(true);

        if (err.response.data.code === 4) {
          setErrMssg("Email not verified");
        } else if (err.response.data.code === 2) {
          setErrMssg("Invalid credentials");
        }
        console.log(err);
      }
    } else {
      setIsinValid(true);
      setErrMssg("Please fill all the fields");
    }
  };

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
      console.log(mail);
      const response = await axios.post(
        "http://localhost:5000/auth/googleverification",
        {
          email: mail,
        }
      );
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
        console.log("Login Done 💯💯💯💯💯");
        // navigate("/signup");
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
  }, [user]);
  return (
    <>
      <div className={Lcss.googlepart} onClick={() => login()}>
        <img src={google} className={Lcss.icon}></img>
        <p className={Lcss.log}>Login with Google</p>
      </div>
      <p className={Lcss.or}>Or</p>
      <div className={Lcss.user}>
        <input
          type="text"
          placeholder="Email"
          className={Lcss.username}
          onChange={DataInp}
          name="email"
        />
      </div>
      <div className={Lcss.pass}>
        <input
          type="password"
          placeholder="Password"
          className={Lcss.password}
          onChange={DataInp}
          name="passwrd"
        />
      </div>
      <div className={Lcss.forgotPassword}>
        <Link to="/forgotpassword">
          <p>Forgot Password?</p>
        </Link>
      </div>
      <button className={Lcss.logtwo} onClick={handlelogin}>
        Login
      </button>
      <div className={Lcss.dont}>
        <p className={Lcss.signup}>
          Don't have an account?{" "}
          <Link to="/Signup">
            <span className={Lcss.spann}>Signup</span>
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
