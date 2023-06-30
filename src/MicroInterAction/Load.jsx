import React from "react";

// css
import LoadCss from "./Css/Load.module.css";

function Load() {
  return (
    <>
      <svg className={LoadCss.spinner} viewBox="0 0 50 50">
        <circle
          className={LoadCss.path}
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke-width="5"
        ></circle>
      </svg>
    </>
  );
}

export default Load;
