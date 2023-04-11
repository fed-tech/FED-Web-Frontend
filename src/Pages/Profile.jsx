import React from "react";
import "./Css/Profilecss/profile.css";
import penSvg from "../Img/pen-icon.svg";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
export default function Profile() {
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const navigate = useNavigate();
  const logout = ()=>{
    removeCookie("AuthToken");
    navigate('/Signup')
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
              </div>
              <div className="values">
                <p className="dets">Ayan Paul</p>
                <p className="dets">2030015</p>
                <p className="dets">ayanpaul1108@gmail.com</p>
                <p className="dets">3rd</p>
                <p className="dets">Electronics</p>
                <p className="dets">kiit</p>
                <p className="dets">9142124912</p>
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
          <button onClick={logout}>click me</button>
        </div>
      </div>
    </div>
  );
}
