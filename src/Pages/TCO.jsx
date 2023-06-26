import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

// components
import Registration1  from "./Registration1";
import Registration2 from "./Registration2";

// svg
import regStatSvg from "../Img/registrationStats.svg";
import logoutSvg from "../Img/ion_log-out.svg";
import penSvg from "../Img/pen-icon.svg";
import filter from "../Img/Filter.svg";
import UpdateProfile from'../Components/Profile/UpdateProfile';

// css
import "./Css/Profilecss/MemberProfile.css";


// state
import AuthContext from "./../store/auth-context";
import Profile from "../Components/Profile/Profile";

export default function TCO() {
  const authCtx = useContext(AuthContext)
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("logout");
    navigate('/Login');
    authCtx.logout();
  }


  const [show, set] = useState("Profile");
  const[showUpdateModal,setShowUpdateModal] = useState(false);
  const [user, setUser] = useState("1");
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
  };
  return (
    <div className="memberBackground">
      <div className="mainbox">
        <div className="memberLeft">
          <div className="dashboard">

            <div className="dashboardTop">
              <h1>DASHBOARD</h1>
              <h2>DASH</h2>
              <h2>BOARD</h2>
              <div className="gotoPro"
                onClick={() => {
                  set("Profile");
                }}>
                <div className="profilePic">

                  <img
                    src={authCtx.user.pic}
                    alt=""
                  />

                </div>
                <div className="Position">
                  <p className="name">{authCtx.user.name}</p>
                  {/* <p className="position">Technical Executive</p> */}
                </div>
              </div>
            </div>

            <div className="dashboardBottom">
              <div
                className="registrationStats"
                onClick={() => {
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
            <Profile setShowUpdateModal={setShowUpdateModal}/>
          </div>
        ) : (
          ""
        )}

        {show === "Registration" ?
          (user === "2" ?
            (
              <Registration1/>              
            ) :
            (
              <Registration2/>
            )
          )
        : (
          ""
        )}
      </div>
      {showUpdateModal&&<UpdateProfile setShowUpdateModal = {setShowUpdateModal}/>}
    </div>
  );
}
