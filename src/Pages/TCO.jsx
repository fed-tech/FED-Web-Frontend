import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

// components
import Registration1 from "./Registration1";
import Registration2 from "./Registration2";

// svg
import regStatSvg from "../Img/registrationStats.svg";
import logoutSvg from "../Img/ion_log-out.svg";
import UpdateProfile from '../Components/Profile/UpdateProfile';

// css
import tco from "./Css/Profilecss/MemberProfile.module.css";


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
  const [showUpdateModal, setShowUpdateModal] = useState(false);
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
    <div className={tco.memberBackground}>
      <div className={tco.mainbox}>
        <div className={tco.memberLeft}>
          <div className={tco.dashboard}>
            <div className={tco.dashboardTop}>
              <h1>DASHBOARD</h1>
              <h2>DASH</h2>
              <h2>BOARD</h2>
              <div
                className={tco.gotoPro}
                onClick={() => {
                  set("Profile");

                }}>
                <div className={tco.profilePic}>
                  <img src={authCtx.user.pic} alt="" />
                </div>
                <div className={tco.Position}>
                  <p className={tco.name}>{authCtx.user.name}</p>
                </div>
              </div>
            </div>

            <div className={tco.dashboardBottom}>
              <div
                className={tco.registrationStats}
                onClick={() => {
                  clickedRegStats();
                }}
              >
                <img src={regStatSvg} alt="" />
                <p> Registration Stats </p>
              </div>

              <div className={tco.logout} onClick={handleLogout}>
                <img src={logoutSvg} alt="" />
                <p> Logout </p>
              </div>
            </div>
          </div>
        </div>

        {show === "Profile" ? (
          <div className={tco.memberRight}>

            <Profile setShowUpdateModal={setShowUpdateModal} />
          </div>
        ) : (
          ""
        )}

        {show === "Registration" ?
          (user === "2" ?
            (
              <Registration1 />
            ) :
            (
              <Registration2 />
            )
          )
          : (
            ""
          )}
      </div>
      {showUpdateModal && <UpdateProfile setShowUpdateModal={setShowUpdateModal} />}
    </div>
  );
}
