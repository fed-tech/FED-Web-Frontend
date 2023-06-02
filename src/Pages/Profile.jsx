import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

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
              <div>
                <Link to="/admin/addMember">Add Member</Link>
              </div>
              <p className="headInnerText">
                <p>Profile Details</p>
                <img src={penSvg} alt="" />
              </p>
            </div>
            <div className="details">
              <table className="profileTable">
                <tbody>
                  <tr>
                    <td className="dets">Full Name</td>
                    <td className="vals">{authCtx.user.name}</td>
                  </tr>
                  <tr>
                    <td className="dets">Roll Number</td>
                    <td className="vals">{authCtx.user.rollNo}</td>
                  </tr>
                  <tr>
                    <td className="dets">Email ID</td>
                    <td className="vals">{authCtx.user.email}</td>
                  </tr>
                  <tr>
                    <td className="dets">Year</td>
                    <td className="vals">{authCtx.user.selected}</td>
                  </tr>
                  <tr>
                    <td className="dets">School</td>
                    <td className="vals">{authCtx.user.school}</td>
                  </tr>
                  <tr>
                    <td className="dets">College</td>
                    <td className="vals">{authCtx.user.college}</td>
                  </tr>
                  <tr>
                    <td className="dets">Mobile No</td>
                    <td className="vals">{authCtx.user.mobileNo}</td>
                  </tr>
                </tbody>
              </table>
              <button className="logoutBtn" onClick={handleLogout}>
                Logout
              </button>
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
          <p style={{ textAlign: "right" }}>
            {authCtx.user.access} ={authCtx.user.access === 0 ? "Admin" : ""}
            {authCtx.user.access === 1 ? "User" : ""}
            {authCtx.user.access === 2 ? "director" : ""}
            {authCtx.user.access === 3 ? "creative member" : ""}
            {authCtx.user.access === 4 ? "tech member" : ""}
            {authCtx.user.access === 5 ? "marketing member" : ""}
            {authCtx.user.access === 6 ? "operations member" : ""}
          </p>
        </div>
      </div>
    </div>
  );
}
