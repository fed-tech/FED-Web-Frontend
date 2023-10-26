import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// state
import AuthContext from "../store/auth-context";

// Components - Dashboard
import Profile from "../Components/Profile/Dashboard/Profile";
import EventAdmin from "../Components/Profile/Dashboard/EventAdmin/EventAdmin";
import EventForm from "../Components/Profile/Dashboard/EventForm/EventForm";
import MembersAdmin from "../Components/Profile/Dashboard/MembersAdmin/MembersAdmin";
import MyEvents from "../Components/Profile/Dashboard/MyEvent/MyEvent";

// Components
import UpdateProfile from "../Components/Profile/UpdateProfile";

// css
import pageCss from "./Css/Page.module.css";

// icons
import GroupsIcon from "@mui/icons-material/Groups";
import LogoutIcon from "@mui/icons-material/Logout";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";

function Page() {
  const [designation, setDesignation] = useState("");
  const [currPage, setCurrPage] = useState("Profile");
  const [showUpdateModal, setShowUpdateModal] = useState(false);

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

  const navigate = useNavigate();

  const authCtx = useContext(AuthContext);

  const handleSetPage = (e) => {
    const pageName = e.target.id;
    console.log(pageName);
    setCurrPage(pageName);
  };

  const handleLogout = () => {
    navigate("/Login");
    authCtx.logout();
  };

  return (
    <div className={pageCss.Page_main}>
      <div className={pageCss.Page}>
        <div className={pageCss.pageLeft}>
          <div className={pageCss.dashboard}>
            <div className={pageCss.dashboardTop}>
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
              {designation === "Admin" ? (
                <>
                  <div
                    onClick={handleSetPage}
                    className={
                      currPage === "Events"
                        ? `${pageCss.dashboardBottom_options} ${pageCss.hello}`
                        : `${pageCss.dashboardBottom_options}`
                    }
                  >
                    <InsertInvitationIcon
                      className={pageCss.dashboardBottom_icons}
                      id="Events"
                    />
                    <p id="Events">Events</p>
                  </div>
                  <div
                    onClick={handleSetPage}
                    className={
                      currPage === "Form"
                        ? `${pageCss.dashboardBottom_options} ${pageCss.hello}`
                        : `${pageCss.dashboardBottom_options}`
                    }
                  >
                    <PlaylistAddIcon
                      className={pageCss.dashboardBottom_icons}
                      id="Form"
                    />
                    <p id="Form">Form</p>
                  </div>
                  <div
                    onClick={handleSetPage}
                    className={
                      currPage === "Members"
                        ? `${pageCss.dashboardBottom_options} ${pageCss.hello}`
                        : `${pageCss.dashboardBottom_options}`
                    }
                  >
                    <GroupsIcon
                      className={pageCss.dashboardBottom_icons}
                      id="Members"
                    />
                    <p id="Members">Members</p>
                  </div>
                </>
              ) : (
                <></>
              )}
              {designation === "User" ? (
                <div
                  onClick={handleSetPage}
                  className={
                    currPage === "Registrations"
                      ? `${pageCss.dashboardBottom_options} ${pageCss.hello}`
                      : `${pageCss.dashboardBottom_options}`
                  }
                >
                  <InsertInvitationIcon
                    className={pageCss.dashboardBottom_icons}
                    id="Registrations"
                  />
                  <p id="Registrations">Events</p>
                </div>
              ) : (
                <></>
              )}
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
          {currPage === "Profile" && (
            <Profile setShowUpdateModal={setShowUpdateModal} />
          )}
          {currPage === "Events" && <EventAdmin />}
          {currPage === "Form" && <EventForm />}
          {currPage === "Members" && <MembersAdmin />}
          {currPage === "Registrations" && <MyEvents />}
        </div>
        {showUpdateModal && (
          <UpdateProfile setShowUpdateModal={setShowUpdateModal} />
        )}
      </div>
    </div>
  );
}

export default Page;
