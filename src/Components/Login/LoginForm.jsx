import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Components
import GoogleLogin from "./GoogleLogin";
import Or from "./Or";
import Load from "./../../MicroInterAction/Load";
import { Alert } from "./../../MicroInterAction/Alert";

// bcrypt
import bcrypt from "bcryptjs-react";

//  axios
import axios from "axios";

// state
import AuthContext from "../../store/auth-context";

//css
import Lcss from "./css/loginpg.module.css";

// icons
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

function LoginForm() {
  const [loadingEffect, setLoad] = useState(false);
  const [see, hide] = useState(false);

  const [user, setUser] = useState({
    email: "",
    passwrd: "",
  });

  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });

  const authCtx = useContext(AuthContext);

  const navigate = useNavigate();

  const DataInp = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (value === "") {
      e.target.style.borderBottom = "1.5px solid transparent";
      e.target.style.outline = "none";
    } else {
      e.target.style.borderBottom = "1.5px solid transparent";
    }

    if (name === "email") {
      if (value.indexOf("@") === -1 || value.indexOf(".") === -1) {
        e.target.style.borderBottom = "1.5px solid  #FF0000";
        e.target.style.outline = "none";
      } else {
        e.target.style.borderBottom = "1.5px solid  black";
      }
    }

    setUser({ ...user, [name]: value });
  };

  const handlelogin = async (e) => {
    e.preventDefault();
    setLoad(true);

    const { email, passwrd } = user;

    if (email != "" && passwrd != "") {
      try {
        const password = bcrypt.hashSync(passwrd, import.meta.env.VITE_BCRYPT);

        const response = await axios.post("/auth/login", {
          username: email,
          password,
        });

        console.log(response.data);
        console.log(
          "response.data.status === true",
          response.data.status === true
        );

        if (response.data.status === true) {
          setLoad(false);

          setError({
            mainColor: "#EDFEEE",
            secondaryColor: "#5CB660",
            symbol: "check_circle",
            title: "Success",
            text: "",
            val: true,
          });

          console.log("----------------------------------------");
          await authCtx.login(
            response.data.result[0].name,
            response.data.result[0].email,
            response.data.result[0].img,
            response.data.result[0].RollNumber,
            response.data.result[0].School,
            response.data.result[0].College,
            response.data.result[0].MobileNo,
            response.data.result[0].selected,
            response.data.result[0].regForm,
            Number(response.data.result[0].access),
            response.data.token,
            10800000
          );
          console.log("====================================");
          console.log("access->", response.data.result[0].access == "0");

          console.log("authCtx.target -> ", authCtx.target);

          if (authCtx.target == "") {
            navigate("/MyProfile");
          } else {
            navigate(`/${authCtx.target}`);
            authCtx.settarget(null);
          }

          return;
        }
      } catch (err) {
        setLoad(false);

        if (err.response.data.code === 4) {
          setError({
            mainColor: "#E5F6FD",
            secondaryColor: "#1AB1F5",
            symbol: "info",
            title: "Information",
            text: "email",
            val: true,
          });

          return;
        } else if (err.response.data.code === 2) {
          setError({
            mainColor: "#FFC0CB",
            secondaryColor: "#FF69B4",
            symbol: "pets",
            title: "Check it out",
            text: "Invalid Credentials",
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
        }
        console.log(err);
      }
    } else {
      setLoad(false);

      setError({
        mainColor: "#FFC0CB",
        secondaryColor: "#FF69B4",
        symbol: "pets",
        title: "Check it out",
        text: "Please Fill All The Details",
        val: true,
      });
    }
  };

  return (
    <>
      <GoogleLogin setLoad={setLoad} />
      <Or />
      <form className={Lcss.formTag}>
        <div className={Lcss.user}>
          <input
            type="text"
            placeholder="Email"
            className={Lcss.username}
            onChange={DataInp}
            name="email"
            required
          />
        </div>
        <div className={Lcss.pass}>
          <input
            type={see ? "text" : "password"}
            placeholder="Password"
            className={Lcss.password}
            onChange={DataInp}
            name="passwrd"
            required
          />
          {see ? (
            <RemoveRedEyeIcon
              className={Lcss.iconSee}
              onClick={() => hide(!see)}
            />
          ) : (
            <VisibilityOffIcon
              className={Lcss.iconSee}
              onClick={() => hide(!see)}
            />
          )}
        </div>
        <div className={Lcss.forgotPassword}>
          <Link to="/forgotpassword" className="LinkStyle">
            <p className={Lcss.forgotPasswordPTag}>Forgot Password?</p>
          </Link>
        </div>
        <button className={Lcss.logtwo} type="submit" onClick={handlelogin}>
          {loadingEffect ? <Load /> : "Login"}
        </button>
      </form>

      <div className={Lcss.dont}>
        <p className={Lcss.signup}>
          Don't have an account?{" "}
          <Link to="/Register" className="LinkStyle">
            <span className={Lcss.spann}>Signup</span>
          </Link>
        </p>
      </div>

      <Alert variant={variants} val={setError} email={user.email} />
    </>
  );
}

export default LoginForm;
