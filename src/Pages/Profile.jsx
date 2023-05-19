import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./Css/Profilecss/profile.css";
import penSvg from "../Img/pen-icon.svg";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { UserContext } from "../../context/userContext";
export default function Profile(props) {
  const [cookie, setCookie, removeCookie] = useCookies(["auth_token"]);
  const { userDetails, setUserDetails } = useContext(UserContext);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:5000/profile/getprofile", {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        auth_token: cookie.auth_token,
      },
    });
    console.log(result.data);
    setUserDetails(result.data);
  };

  useEffect(() => {
    console.log("profile page");
    if (!userDetails) {
      loadUsers();
    }
  }, []);

  const navigate = useNavigate();
  function handleLogout() {
    navigate("/Signup");
    removeCookie("auth_token");
    props.setIsLoggedIn(false);
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
                <p className="vals">{userDetails.name}</p>
                <p className="vals"></p>
                <p className="vals">{userDetails.email}</p>
                <p className="vals"></p>
                <p className="vals"></p>
                <p className="vals"></p>
                <p className="vals"></p>
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
