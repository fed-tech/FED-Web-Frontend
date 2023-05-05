import React from "react";

// Css
import LCss from "./Css/Loading.module.css";

export default function Loading() {
  return (
    <div className={LCss.centerLoader}>
      <div className={LCss.arc} />
      <h1 className={LCss.loadingSpanH1}>
        <span className={LCss.loadingSpan}>Loading</span>
      </h1>
    </div>
  );
}
