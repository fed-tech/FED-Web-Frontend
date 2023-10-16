import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

// Oauth
import { useGoogleLogin } from "@react-oauth/google";

// Components
import { Alert } from "./../../MicroInterAction/Alert";
import CompleteProfile from "./CompleteProfile";

//  axios
import axios from "axios";

// state
import AuthContext from "../../store/auth-context";

// css
import SuCss from "./css/Signup.module.css";

// img
import google from "./../../assets/Login/Google.svg";

const GoogleSignUp = ({ setLoad }) => {
  const [codeResponse, setCodeResponse] = useState();
  const [passData, setGoogleData] = useState([]);
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

  useEffect(() => {
    if (codeResponse) {
      loginWithGoogle();
    }
  }, [codeResponse]);

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

      const mail = googleResponse.data.email;

      const response = await axios.post("/auth/googleverification", {
        email: mail,
      });
      
      console.log(response);

      if (response.status === 202) {
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

        if (authCtx.target == "") {
          navigate("/MyProfile");
        } else {
          navigate(`/${authCtx.target}`);
          authCtx.settarget(null);
        }

        return;
      } else {
        setLoad(false);

        setGoogleData(googleResponse.data);
        // localStorage.setItem("user", JSON.stringify(googleResponse.data));
        // navigate("/CreateProfile");
      }
    } catch (err) {
      console.log(err);

      setLoad(false);

      setError({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "The action was not carried out succesfully please try again.",
        val: true,
      });
    }
  };

  return (
    <>
      <div className={SuCss.googleDiv} onClick={() => login()}>
        <img src={google} className="icon"></img>
        <p className={SuCss.googleText}>SignUp with google</p>
      </div>

      <Alert variant={variants} val={setError} />
      <CompleteProfile data={passData} set={setGoogleData} />
    </>
  );
};

GoogleSignUp.propTypes = {
  setLoad: PropTypes.func.isRequired,
};

export default GoogleSignUp;
