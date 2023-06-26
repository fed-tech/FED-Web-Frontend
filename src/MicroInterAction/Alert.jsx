import React, { useState } from "react";

// css
import "./Css/Alert.css";

export const Alert = ({ variant }) => {
  const [open, setOpen] = useState(true);
  if (open)
    return (
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
          <span class="material-symbols-outlined symbol">{variant.symbol}</span>{" "}
        </div>
        <div className="description-container">
          <span className="description-title">{variant.title}:</span>
          <span className="description-text">{variant.text}</span>
        </div>
        <a className="symbol-close-link" onClick={() => setOpen(false)}>
          <span class="material-symbols-outlined ">close</span>
        </a>
      </div>
    );
};
