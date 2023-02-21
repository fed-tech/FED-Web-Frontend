import React from "react";
import "./Css/err.css";
// import Errimage from "./../Pages/Css/errimage/Layer3.svg";
function Errorpage() {
  return (
    <div className="bg">
      <div className="oops">Oops!</div>
      <p className="notfound">Error 404 page not found</p>
      <p className="the_page">
        The page you requested could not be found.
        <br />
        We're working on it :)
      </p>
      {/* <div className="cycle_image">
        <img src={Errimage} className="cycleimage" alt=""></img>
      </div> */}
    </div>
  );
}
export default Errorpage;
