import React from "react";
import PropTypes from "prop-types";

// css
import CPCss from "./css/CompleteProfile.module.css";

function CompleteProfile(props) {
  console.log(props);
  return <div className={CPCss.mDiv}>Complete Profile</div>;
}

CompleteProfile.propTypes = {};

export default CompleteProfile;
