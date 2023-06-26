import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// css
import pro from "./Css/Profilecss/profile.module.css";

// img
import penSvg from "../Img/pen-icon.svg";

// state
import AuthContext from "./../store/auth-context";

export default function Profile() {
  const authCtx = useContext(AuthContext);
  console.log(authCtx.user.name);

  const navigate = useNavigate();

  function handleLogout() {
    console.log("logout");
    navigate("/Login");
    authCtx.logout();
  }
  return (
    <div className={pro.profileBackground}>
      <div className={pro.pmainBox}>
        <div className={pro.profileLeft}>
          <div className={pro.profile}>
            <div className={pro.proHeading}>
              {authCtx.user.access === 0 ? (
                <>
                  <div>
                    <Link to="/admin/Member">Member</Link>
                  </div>
                  <br />
                  <br />
                  <br />
                </>
              ) : (
                ""
              )}

              <p className={pro.headInnerText}>
                <p>Profile Details</p>
                <Link to="/updateprofile">
                  <img src={penSvg} alt="" />
                </Link>
              </p>
            </div>
            <div className={pro.details}>
              <table className={pro.profileTable}>
                <tbody>
                  <tr>
                    <td className={pro.dets}>Full Name</td>
                    <td className={pro.vals}>{authCtx.user.name}</td>
                  </tr>
                  <tr>
                    <td className={pro.dets}>Roll Number</td>
                    <td className={pro.vals}>{authCtx.user.rollNo}</td>
                  </tr>
                  <tr>
                    <td className={pro.dets}>Email ID</td>
                    <td className={pro.vals}>{authCtx.user.email}</td>
                  </tr>
                  <tr>
                    <td className={pro.dets}>Year</td>
                    <td className={pro.vals}>{authCtx.user.selected}</td>
                  </tr>
                  <tr>
                    <td className={pro.dets}>School</td>
                    <td className={pro.vals}>{authCtx.user.school}</td>
                  </tr>
                  <tr>
                    <td className={pro.dets}>College</td>
                    <td className={pro.vals}>{authCtx.user.college}</td>
                  </tr>
                  <tr>
                    <td className={pro.dets}>Mobile No</td>
                    <td className={pro.vals}>{authCtx.user.mobileNo}</td>
                  </tr>
                </tbody>
              </table>
              <button className={pro.logoutBtn} onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
        <div className={pro.profileRight}>
          <p className={pro.illuminating}>
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
