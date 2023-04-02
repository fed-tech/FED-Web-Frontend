import React from "react";
import "./Css/Profilecss/profile.css";
import penSvg from "../Img/pen-icon.svg";
export default function Profile() {
  return (
    <div className="profileBackground">
      
      <div className="pmainBox">
        <div className="profileLeft">
          <div className="profile">
            <div className="proHeading">
              <p className="headInnerText">
                <p>Profile Details</p> 
                <img src={penSvg} alt="" />
              </p> 
            </div>
            <p className="dets">Full Name</p>
            <p className="dets">Roll Number</p>
            <p className="dets">Email ID</p>
            <p className="dets">Year</p>
            <p className="dets">School</p>
            <p className="dets">College</p>
            <p className="dets">Mobile No</p>
          </div>
        </div>
        <div className="profileRight">
          <p className="illuminating">ILLUMINATIING
            <br />
            THE 
            <br />
            <span>ENTREPRENEUR</span>
            <br />
            IN YOU
          </p>
          {/* <div className="illuminating">ILLUMINATIING</div>
          <p className="the">THE </p>
          <p className="entrepreneur">ENTREPRENEUR</p>
          <p className="inYou">IN YOU</p> */}
        </div>
      </div>

    </div>
  );
}
