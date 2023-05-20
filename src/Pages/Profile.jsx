import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

// css
import "./Css/Profilecss/profile.css";

// img
import penSvg from "../Img/pen-icon.svg";

// state
import AuthContext from "./../store/auth-context";

export default function Profile() {
  const authCtx = useContext(AuthContext);

  const navigate = useNavigate();

  function handleLogout() {
    console.log("logout");
    navigate("/Login");
    authCtx.logout();
  }

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
            <div className="details">
              <div className="keys">
                <p className="dets">Full Name</p>
                <p className="dets">Roll Number</p>
                <p className="dets">Email ID</p>
                <p className="dets">Year</p>
                <p className="dets">School</p>
                <p className="dets">College</p>
                <p className="dets">Mobile No</p>
                <button className="logoutBtn" onClick={handleLogout}>
                  Logout
                </button>
              </div>

              <div className="values">
                <p className="vals">{authCtx.user.name}</p>
                <p className="vals">{authCtx.user.rollNo}</p>
                <p className="vals">{authCtx.user.email}</p>
                <p className="vals">{authCtx.user.selected}</p>
                <p className="vals">{authCtx.user.school}</p>
                <p className="vals">{authCtx.user.college}</p>
                <p className="vals">{authCtx.user.mobileNo}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="profileRight">
          <p className="illuminating">
            <p>ILLUMINATIING</p>
            <p>THE</p>
            <p>
              <span>ENTREPRENEUR</span>
            </p>
            <p>IN YOU</p>
          </p>
        </div>
      </div>
    </div>
  );
}