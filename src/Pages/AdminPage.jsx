import React, { useContext, useEffect, useState } from "react";
// css

import pageCss from "./Css/Page.module.css";

import LogoutIcon from "@mui/icons-material/Logout";
import AuthContext from "../store/auth-context";
import { useNavigate } from "react-router-dom";
import Profile from "../Components/Profile/Profile";

function Page() {
  const [designation, setDesignation] = useState("");
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
    if (authCtx.user.access == 0) {
      setDesignation("Admin");
    } else if (authCtx.user.access == 1) {
      setDesignation("User");
    } else if (authCtx.user.access == 7) {
      setDesignation("Alumni");
    } else {
      setDesignation("Member");
    }
  }, []);

  const handleLogout = () => {
    navigate("/Login");
    authCtx.logout();
    localStorage.removeItem("regForm");
  };

  return (
    <div className={pageCss.Page_main}>
      <div className={pageCss.Page}>
        <div className={pageCss.pageLeft}>
          <div className={pageCss.dashboard}>
            <div className={pageCss.dashboardTop}>
              <h1>DASHBOARD</h1>
              <h2>DASH</h2>
              <h2>BOARD</h2>
              <div className={pageCss.gotoPro}>
                <div className={pageCss.profilePic}>
                  <img src={authCtx.user.pic} alt="" />
                </div>
                <div className={pageCss.Position}>
                  <p className={pageCss.name}>{authCtx.user.name}</p>
                  <p className={pageCss.designation}>{designation}</p>
                </div>
              </div>
            </div>
            <div className={pageCss.dashboardBottom}>
              <div
                onClick={handleLogout}
                className={pageCss.dashboardBottom_options}
              >
                <LogoutIcon className={pageCss.dashboardBottom_icons} />
                <p>Logout</p>
              </div>
            </div>
          </div>
        </div>
        <div className={pageCss.pageRight}>
          <Profile />
        </div>
      </div>
    </div>
  );
}

export default Page;
