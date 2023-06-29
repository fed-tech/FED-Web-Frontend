import React from "react";
import PropTypes from "prop-types";

// Css
import Lcss from "./css/loginpg.module.css";

const Header = ({ title, des }) => {
  return (
    <div className={Lcss.hellopart}>
      <p className={Lcss.welc}>{title}</p>
      <p className={Lcss.det}>{des}</p>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  des: PropTypes.string.isRequired,
};

export default Header;
