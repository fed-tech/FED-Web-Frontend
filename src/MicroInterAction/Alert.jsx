import React, { useState } from "react";

// css
import "./Css/Alert.css";

export const Alert = ({ variant, val }) => {
  return (
    <div className="alert-mDiv">
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
          <span class="material-symbols-outlined symbol colorIcon">
            {variant.symbol}
          </span>{" "}
        </div>
        <div className="description-container">
          <span className="description-title">{variant.title}:</span>
          <span className="description-text"> {variant.text}</span>
        </div>
        <a className="symbol-close-link" onClick={() => val({ val: false })}>
          <span class="material-symbols-outlined  colorIcon">close</span>
        </a>
      </div>
    </div>
  );
};
