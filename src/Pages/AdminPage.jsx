import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// state
import AuthContext from "../store/auth-context";

// css
import pageCss from "./Css/Page.module.css";

// Components
import GroupsIcon from "@mui/icons-material/Groups";
import LogoutIcon from "@mui/icons-material/Logout";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import EventAdmin from "../Components/Profile/EventAdmin";
import UpdateProfile from "../Components/Profile/UpdateProfile";
import Profile from "../Components/Profile/Profile";
import EventForm from "../Components/Profile/EventForm";
import MembersAdmin from "../Components/Profile/Admin Member/MembersAdmin";

function Page() {
  const [designation, setDesignation] = useState("");
  // const navigate = useNavigate();
  // const authCtx = useContext(AuthContext);

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
  const [profile, setProfile] = useState(true);
  const [event, setEvent] = useState(false);
  const [form, setFrom] = useState(false);
  const [members, setMembers] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const handleLogout = () => {
    navigate("/Login");
    authCtx.logout();
  };
  const handleProfile = () => {
    setProfile(true);
    setEvent(false);
    setFrom(false);
    setMembers(false);
  };
  const handleEvent = () => {
    setProfile(false);
    setEvent(true);
    setFrom(false);
    setMembers(false);
  };
  const handleForm = () => {
    setProfile(false);
    setEvent(false);
    setFrom(true);
    setMembers(false);
  };
  const handleMembers = () => {
    setProfile(false);
    setEvent(false);
    setFrom(false);
    setMembers(true);
  };

  return (
    <div className={pageCss.Page_main}>
      <div className={pageCss.Page}>
        <div className={pageCss.pageLeft}>
          <div className={pageCss.dashboard}>
            <div className={pageCss.dashboardTop}>
              <h1 className={pageCss.DASHBOARD}>DASHBOARD</h1>
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
                onClick={handleEvent}
                className={
                  event
                    ? `${pageCss.dashboardBottom_options} ${pageCss.hello}`
                    : `${pageCss.dashboardBottom_options}`
                }
              >
                <InsertInvitationIcon
                  className={pageCss.dashboardBottom_icons}
                />
                <p>Events</p>
              </div>
              <div
                onClick={handleForm}
                className={
                  form
                    ? `${pageCss.dashboardBottom_options} ${pageCss.hello}`
                    : `${pageCss.dashboardBottom_options}`
                }
              >
                <PlaylistAddIcon className={pageCss.dashboardBottom_icons} />
                <p>Form</p>
              </div>
              <div
                onClick={handleMembers}
                className={
                  members
                    ? `${pageCss.dashboardBottom_options} ${pageCss.hello}`
                    : `${pageCss.dashboardBottom_options}`
                }
              >
                <GroupsIcon className={pageCss.dashboardBottom_icons} />
                <p>Members</p>
              </div>
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
          {profile && <Profile setShowUpdateModal={setShowUpdateModal} />}
          {event && <EventAdmin />}
          {form && <EventForm />}
          {members && <MembersAdmin />}
        </div>
        {showUpdateModal && (
          <UpdateProfile setShowUpdateModal={setShowUpdateModal} />
        )}
      </div>
    </div>
  );
}

export default Page;
