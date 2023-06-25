import React, { useContext, useEffect, useState } from "react";
import "../Components/Profile/css/Page.css";
import GroupsIcon from "@mui/icons-material/Groups";
import LogoutIcon from "@mui/icons-material/Logout";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import PersonIcon from "@mui/icons-material/Person";
import AuthContext from "../store/auth-context";
import { useNavigate } from "react-router-dom";
import EventAdmin from "../Components/Profile/EventAdmin";
import AdminProfile from "../Components/Profile/AdminProfile";
import UpdateProfile from "../Components/Profile/UpdateProfile";

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
  const toggleFunc = () => {
    setProfile(!profile);
    setEvent(!event);
    setFrom(!form);
    setMembers(!members);
  };
  return (
    <div className="Page_main">
      <div className="Page">
        <div className="page_left">
          <div className="page_left_content">
            <div className="page_left_userInfo">
              <h2 className="page_left_title">Dashboard</h2>
              <div className="member_img">
                <img src={authCtx.user.pic} alt="" />
              </div>
              <div className="user_name_desig">
                <h2 className="user_name">{authCtx.user.name}</h2>
                <p className="designation">Sr Creative executive</p>
              </div>
            </div>
            <div className="page_left_options">
              <p
                onClick={toggleFunc}
                style={{ color: profile ? "#f45725" : "white" }}
              >
                <PersonIcon />
                Profile
              </p>
              <p
                onClick={toggleFunc}
                style={{ color: event ? "#f45725" : "white" }}
              >
                <InsertInvitationIcon />
                Events
              </p>
              <p>
                <PlaylistAddIcon />
                Form
              </p>
              <p>
                <GroupsIcon />
                Members
              </p>
              <p onClick={handleLogout}>
                <LogoutIcon />
                Logout
              </p>
            </div>
          </div>
          <div className="vertical_line"></div>
        </div>
        <div className="page_right">
          {profile && <AdminProfile setShowUpdateModal={setShowUpdateModal} />}
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
