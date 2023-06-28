import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Oauth
import { useGoogleLogin } from "@react-oauth/google";

// Components
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

// img
import google from "./../../assets/Login/Google.svg";

function LoginForm() {
  const [codeResponse, setCodeResponse] = useState();
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
      e.target.style.borderBottom = "1.5px solid  transparent";
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

        console.log(response);

        if (response.status === 202) {
          setLoad(false);

          setError({
            mainColor: "#EDFEEE",
            secondaryColor: "#5CB660",
            symbol: "check_circle",
            title: "Success",
            text: "",
            val: true,
          });

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

          if (authCtx.target == null) {
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
            text: "Email not verified",
            val: true,
          });
        } else if (err.response.data.code === 2) {
          setError({
            mainColor: "#FFC0CB",
            secondaryColor: "#FF69B4",
            symbol: "pets",
            title: "Check it out",
            text: "Invalid Credentials",
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

  const login = useGoogleLogin({
    onSuccess: (response) => setCodeResponse(response),
  });

  const loginWithGoogle = async () => {
    try {
      setLoad(true);

      const googleResponse = await axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${codeResponse.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${codeResponse.access_token}`,
            Accept: "application/json",
          },
        }
      );

      let data = {
        email: googleResponse.data.email,
      };

      const response = await axios.post("/auth/googleverification", data);

      console.log(response.data);

      if (response.data.status === true) {
        setLoad(false);

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

        console.log("Login Done 💯💯💯💯💯");

        navigate("/MyProfile");
        return;
      } else {
        setLoad(false);

        if (response.data.code === 4) {
          setError({
            mainColor: "#E5F6FD",
            secondaryColor: "#1AB1F5",
            symbol: "info",
            title: "Information",
            text: "Email not verified",
            val: true,
          });
        } else if (response.data.code === 2) {
          setError({
            mainColor: "#FFC0CB",
            secondaryColor: "#FF69B4",
            symbol: "pets",
            title: "Check it out",
            text: "Please Sign Up first",
            val: true,
          });
        }
      }
    } catch (err) {
      setLoad(false);
      console.log(err);
    }
  };

  useEffect(() => {
    if (codeResponse) {
      loginWithGoogle();
    }
  }, [codeResponse]);

  return (
    <>
      <div className={Lcss.googlepart} onClick={() => login()}>
        <img src={google} className={Lcss.icon}></img>
        <p className={Lcss.log}>Login with Google</p>
      </div>
      <p className={Lcss.or}>Or</p>

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
            min="1"
            max="10"
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
          <Link to="/forgotpassword">
            <p>Forgot Password?</p>
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

      <Alert variant={variants} val={setError} />
    </>
  );
}

export default LoginForm;
