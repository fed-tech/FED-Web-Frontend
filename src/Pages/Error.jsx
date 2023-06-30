import React, { useEffect } from "react";

// css
import ErrCss from "./Css/err.module.css";

// assets
import Errimage from "./../assets/Error/Layer 3.svg";

function Errorpage() {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={ErrCss.bg}>
      <div className={ErrCss.oops}>Oops!</div>
      <p className={ErrCss.notfound}>Error 404 page not found</p>
      <p className={ErrCss.the_page}>
        The page you requested could not be found.
        <br />
        We're working on it :)
      </p>
      <div className={ErrCss.cycle_image}>
        <img src={Errimage} className={ErrCss.cycleimage} alt=""></img>
      </div>
    </div>
  );
}
export default Errorpage;
