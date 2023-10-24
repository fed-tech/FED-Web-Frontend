import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

// css
import "./Css/Alert.css";
import axios from "axios";

export const Alert = ({ variant, val, email }) => {
  const [sent, setSent] = useState(false);
  const [showAlert,setShowAlert] = useState(false)
  const resendMail = async () => {
    try {
      const response = await axios.get(`/auth/resendMail/${email}`);
      console.log(response);
      if (response.status == 200) {
        setSent(true);
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    setShowAlert(variant.val ? true: false)
    setTimeout(() => {
      setShowAlert(false)
    }, 5000);
  }, [variant]);
  return (
    <div className="alert-mDiv" id={showAlert ? "show" : "hide"}>
      <div
        className="alert-container"
        style={{
          background: variant.mainColor,
          border: "0.1rem solid " + variant.secondaryColor,
        }}
      >
        <div
          className="symbol-container"
          style={{ background: variant.secondaryColor }}
        >
          <div>
            <span class="material-symbols-outlined symbol colorIcon">
              {variant.symbol}
            </span>
          </div>
        </div>
        <div className="description-container">
          <span className="description-title">{variant.title}:</span>
          {variant.text == "email" ? (
            <>
              <span className="description-text">
                {" "}
                {sent ? (
                  <>Mail sent! Please check your mail</>
                ) : (
                  <>
                    Email not verified!{" "}
                    <span
                      style={{
                        textDecoration: "underline",
                        color: "red",
                        cursor: "pointer",
                      }}
                      onClick={resendMail}
                    >
                      Resend
                    </span>{" "}
                    verification mail
                  </>
                )}
              </span>
            </>
          ) : (
            <>
              <span className="description-text"> {variant.text}</span>
            </>
          )}
        </div>
        <a className="symbol-close-link" onClick={() => val({ val: false })}>
          <span class="material-symbols-outlined  colorIcon">close</span>
        </a>
      </div>
    </div>
  );
};

Alert.propTypes = {
  variant: PropTypes.object.isRequired,
  val: PropTypes.func.isRequired,
};
