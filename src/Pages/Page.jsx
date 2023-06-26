import React, { useContext, useEffect, useState } from "react";
import "./Css/Page.css";
import GroupsIcon from "@mui/icons-material/Groups";
import LogoutIcon from "@mui/icons-material/Logout";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import AuthContext from "../store/auth-context";
import { useNavigate } from "react-router-dom";
import EventAdmin from "../Components/Profile/EventAdmin";
import UpdateProfile from "../Components/Profile/UpdateProfile";
import Profile from "../Components/Profile/Profile";

function Page() {
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
  const handleProfile = ()=>{
    setProfile(true);
    setEvent(false);
    setFrom(false);
    setMembers(false);
  }
  const handleEvent = ()=>{
    setProfile(false);
    setEvent(true);
    setFrom(false);
    setMembers(false);
  }
  const handleForm = ()=>{
    setProfile(false);
    setEvent(false);
    setFrom(true);
    setMembers(false);
  }
  const handleMembers = ()=>{
    setProfile(false);
    setEvent(false);
    setFrom(false);
    setMembers(true);
  }
  
  return (
    <div className="Page_main">
      <div className="Page">
        <div className="page_left">
          <div className="page_left_dashboard">
            <div className="page_left_dashboardTop" onClick={handleProfile}>
              <h2 className="page_left_title">Dashboard</h2>
              <div className="page_left_gotoPro">
                <div className="member_profilePic">
                  <img src={authCtx.user.pic} alt="" />
                </div>
                <div className="page_left_position">
                  <h2 className="user_name">{authCtx.user.name}</h2>
                  <p className="designation">Admin</p>
                </div>
              </div>
            </div>
            <div className="page_left_dashboardBottom">
              <div
                onClick={handleEvent}
                className="dashboardBottom_options"
              >
                <InsertInvitationIcon className="dashboardBottom_icons"  htmlColor = {event && "#f45725"}/>
                <p style={{ color: event && "#f45725"}}
                 >Events</p>
              </div>
              <div className="dashboardBottom_options">
                <PlaylistAddIcon className="dashboardBottom_icons"/>
                <p>Form</p>
              </div>
              <div className="dashboardBottom_options">
                <GroupsIcon className="dashboardBottom_icons"/>
                <p>Members</p>
              </div>
              <div onClick={handleLogout} className="dashboardBottom_options">
                <LogoutIcon className="dashboardBottom_icons"/>
                <p>Logout</p>
              </div>
            </div>
          </div>
        </div>
        <div className="page_right">
          {profile && <Profile setShowUpdateModal={setShowUpdateModal} />}
          {event && <EventAdmin />}
        </div>
        {showUpdateModal && (
          <UpdateProfile setShowUpdateModal={setShowUpdateModal} />
        )}
      </div>
    </div>
  );
}

export default Page;
