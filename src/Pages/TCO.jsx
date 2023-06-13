import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";


// svg
import regStatSvg from "../Img/registrationStats.svg";
import logoutSvg from "../Img/ion_log-out.svg";
import penSvg from "../Img/pen-icon.svg";

// css
import "./Css/Profilecss/MemberProfile.css";


// state
import AuthContext from "./../store/auth-context";

export default function TCO() {
  const authCtx = useContext(AuthContext)
  console.log(authCtx.user.name);
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("logout");
    navigate('/Login');
    authCtx.logout();
  }


  const [show, set] = useState("Profile");

  useEffect(() => {
    console.table(show);
  }, [show]);
  return (
    <div className="memberBackground">
      <div className="mainbox">
        <div className="memberLeft">
          <div className="dashboard">
            <div className="dashboardTop">
              <h1>DASHBOARD</h1>
              <h2>DASH</h2>
              <h2>BOARD</h2>
              <div className="profilePic">

                <img
                  src={authCtx.user.pic}
                  alt=""
                  onClick={() => {
                    set("Profile");
                  }}
                />

              </div>
              <div className="Position">
                <p className="name">{authCtx.user.name}</p>
                {/* <p className="position">Technical Executive</p> */}
              </div>
            </div>

            <div className="dashboardBottom">
              <div
                className="registrationStats"
                onClick={() => {
                  set("Registration");
                }}
              >
                <img src={regStatSvg} alt="" />
                <p> Registration Stats </p>
              </div>
              <div className="logout" onClick={handleLogout}>
                <img src={logoutSvg} alt="" />
                <p> Logout </p>
              </div>
            </div>
          </div>
        </div>

        {show === "Profile" ? (
          <div className="memberRight">
            <div id="profile">
              <div className="proHeading">
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

                <p className="headInnerText">
                  <p>Profile Details</p>
                  <Link to='/updateprofile'>
                    <img src={penSvg} alt="" />
                  </Link>
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
          </div>
        ) : (
          ""
        )}
      
        {show === "Registration" ?
         (
         <div className="memberRight">
          <div className="registrationsTop">
            <h1>NUMBER OF REGISTRATIONS</h1>
            <div className="filter"></div>
          </div>
          <div className="registrationsBottom">
            <div className="registrationTable">
              <tr>
                <th>Event Name</th>
                <th>Registration Stats</th>
                <th>Event Date</th>
              </tr>
            </div>
          </div>
         </div>
          
         ) 
         : ""}
      </div>
    </div>
  );
}
