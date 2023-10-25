import React, { useContext } from "react";
import "../../css/Profile/profile.css";
// import penSvg from "../../../Img/pen-icon.svg";
import "../../css/Profile/profile2.css";
import AuthContext from "../../../store/auth-context";

function Profile() {
  const authCtx = useContext(AuthContext);
  return (
    <div id="profile">
      <div className="proHeading">
        <p className="headInnerText">
          <p>Profile Details</p>
        </p>
      </div>
      <div className="details">
        <table className="profileTable">
          <tbody>
            <tr>
              <td className="dets1">Full Name</td>
              <td className="vals1">{authCtx.user.name}</td>
            </tr>
            <tr>
              <td className="dets1">Roll Number</td>
              <td className="vals1">{authCtx.user.rollNo}</td>
            </tr>
            <tr>
              <td className="dets1">Email ID</td>
              <td className="vals1">{authCtx.user.email}</td>
            </tr>
            <tr>
              <td className="dets1">Year</td>
              <td className="vals1">{authCtx.user.selected}</td>
            </tr>
            <tr>
              <td className="dets1">School</td>
              <td className="vals1">{authCtx.user.school}</td>
            </tr>
            <tr>
              <td className="dets1">College</td>
              <td className="vals1">{authCtx.user.college}</td>
            </tr>
            <tr>
              <td className="dets1">Mobile No</td>
              <td className="vals1">{authCtx.user.mobileNo}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Profile;
