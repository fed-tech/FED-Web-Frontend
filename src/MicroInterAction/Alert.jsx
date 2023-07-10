import React, { useState } from "react";
import PropTypes from "prop-types";

// css
import "./Css/Alert.css";
import axios from "axios";

export const Alert = ({ variant, val, email }) => {
  const [sent, setSent] = useState(false);
  const [text, setText] = useState(
    "Email not verified! Resend verification mail"
  );

  const resendMail = async () => {
    if (!sent) {
      try {
        const response = await axios.get(`/auth/resendMail/${email}`);
        console.log(response);
        if (response.status == 200) {
          setText("Mail sent! Please check your mail");
          setSent(true);
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log("Mail Sent!!!");
    }
  };

  return (
    <div className="alert-mDiv" id={variant.val ? "show" : "hide"}>
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
              <span
                className="description-text"
                onClick={resendMail}
                style={{ cursor: !sent ? "pointer" : "auto" }}
              >
                {" "}
                {text}
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
