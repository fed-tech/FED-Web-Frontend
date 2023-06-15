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
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("logout");
    navigate('/Login');
    authCtx.logout();
  }


  const [show, set] = useState("Profile");

  const [user, setUser] = useState("1")
  // 1 --> creative, tech, operations
  // 2 --> marketing
  useEffect(() => {
    console.log(show);
    console.log(user);
  }, [show, user]);

  const clickedRegStats = () => {
    set("Registration");
    console.log(authCtx.user.access);
    { authCtx.user.access === 0 ? "Admin" : "" }
    { authCtx.user.access === 1 ? setUser("2") : "" }
    { authCtx.user.access === 2 ? "director" : "" }
    { authCtx.user.access === 3 ? setUser("1") : "" }
    { authCtx.user.access === 4 ? setUser("1") : "" }
    { authCtx.user.access === 5 ? setUser("2") : "" }
    { authCtx.user.access === 6 ? setUser("1") : "" }
    console.log("user: ", user);
  }
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
                  // set("Registration");
                  clickedRegStats()
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
          (user === "2" ?
            (
              <div className="memberRight">
                <div className="registrationsTop">
                  <h1>NUMBER OF REGISTRATIONS</h1>
                  <div className="filter">Filter</div>
                </div>
                <div className="registrationsBottom">
                  <table className="registrationTable">
                    <tr className="tableHead font1">
                      <th>Event Name</th>
                      <th>Registration Stats</th>
                      <th>Event Date</th>
                    </tr>

                    <tr className="tableData">
                      <td>KALKI</td>
                      <td>500</td>
                      <td>13 FEBRUARY</td>
                    </tr>
                    <tr className="tableData">
                      <td>KALKI</td>
                      <td>500</td>
                      <td>13 FEBRUARY</td>
                    </tr>
                    <tr className="tableData">
                      <td>KALKI</td>
                      <td>500</td>
                      <td>13 FEBRUARY</td>
                    </tr>
                    <tr className="tableData">
                      <td>KALKI</td>
                      <td>500</td>
                      <td>13 FEBRUARY</td>
                    </tr>


                  </table>

                </div>
              </div>

            ) :
            (
              <div className="memberRight">
                <div className="registrationsTop">
                  <h1>EVENT REGISTRATIONS</h1>
                  <div className="filter"></div>
                </div>
                <div className="registrationsBottom">
                  <table className="registrationTable">
                    <tr className="tableHead font1">
                      <th>Event Name</th>
                      <th>Event Date</th>
                      <th>No of Registrations</th>
                    </tr>

                    <div className="row">

                      <tr className="eTableData">
                        <td>KALKI</td>
                        <td>13 FEBRUARY</td>
                        <td>500</td>
                      </tr>

                      <div className="desc font1">
                        Registration Stats
                      </div>

                      <div className="media">
                          <div className="source">
                            <p>By Mail:</p>
                            <p>12345</p>
                          </div>
                          <div className="source">
                            <p>By Instagram:</p>
                            <p>12345</p>
                          </div>
                          <div className="source">
                            <p>By Whatsapp:</p>
                            <p>12345</p>
                          </div>
                          <div className="source">
                            <p>By LinkedIn:</p>
                            <p>12345</p>
                          </div>
                      </div>

                    </div>


                    <div className="row">
                      <tr className="eTableData">
                        <td>KALKI</td>
                        <td>500</td>
                        <td>13 FEBRUARY</td>
                      </tr>
                    </div>



                  </table>

                </div>
              </div>
            )
          )
          : ""}
      </div>
    </div>
  );
}
