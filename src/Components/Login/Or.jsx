import React from "react";

//css
import Lcss from "./css/loginpg.module.css";

export default function Or() {
  return (
    <div className={Lcss.orMDIv}>
      <div className={Lcss.orLine}></div>
      <p className={Lcss.or}>Or</p>
      <div className={Lcss.orLine}></div>
    </div>
  );
}
