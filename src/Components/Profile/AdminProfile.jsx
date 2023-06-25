import React, { useContext } from "react";
import { Link } from "react-router-dom";

// img
import penSvg from "../../Img/pen-icon.svg";

// css
import "./css/AdminProfile.css";
import "../../Pages/Css/Profilecss/profile.css";

// state
import AuthContext from "../../store/auth-context";

function AdminProfile({ setShowUpdateModal }) {
  const authCtx = useContext(AuthContext);
  return (
    <div className="admin-profile">
      <div className="proHeadingg">
        <p className="headInnerText">
          <p>Profile Details</p>

          <img src={penSvg} alt="" onClick={() => setShowUpdateModal(true)} />
        </p>
      </div>
      <div className="detailss">
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
      </div>
    </div>
  );
}

export default AdminProfile;
