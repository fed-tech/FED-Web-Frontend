import React from "react";
import PropTypes from "prop-types";

// Components
import { Alert } from "./../../MicroInterAction/Alert";

//  axios
import axios from "axios";

// state
import AuthContext from "../../store/auth-context";

// css
import SuCss from "./css/Signup.module.css";

// img
import google from "./../../assets/Login/Google.svg";

const GoogleSignUp = ({ setLoad }) => {
  return (
    <>
      <div className={SuCss.googleDiv} onClick={() => login()}>
        <img src={google} className="icon"></img>
        <p className={SuCss.googleText}>SignUp with google</p>
      </div>

      <Alert variant={variants} val={setError} />
    </>
  );
};

GoogleSignUp.propTypes = {
  setLoad: PropTypes.func.isRequired,
};

export default GoogleSignUp;
