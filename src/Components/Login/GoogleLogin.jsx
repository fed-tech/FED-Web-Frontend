import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

// Oauth
import { useGoogleLogin } from "@react-oauth/google";

// Components
import { Alert } from "./../../MicroInterAction/Alert";

//  axios
import axios from "axios";

// state
import AuthContext from "../../store/auth-context";

//css
import Lcss from "./css/loginpg.module.css";

// img
import google from "./../../assets/Login/Google.svg";

export default function GoogleLogin({ setLoad }) {
  const [codeResponse, setCodeResponse] = useState();
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

        if (authCtx.target == null) {
          navigate("/MyProfile");
        } else {
          navigate(`/${authCtx.target}`);
          authCtx.settarget(null);
        }

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
      console.log(err);

      setLoad(false);
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

      <Alert variant={variants} val={setError} />
    </>
  );
}

GoogleLogin.propTypes = {
  setLoad: PropTypes.func.isRequired,
};
