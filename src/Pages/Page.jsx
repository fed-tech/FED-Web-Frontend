import React, { useState } from "react";
import "../Components/Profile/cssp/Page.css";
import GroupsIcon from "@mui/icons-material/Groups";
import LogoutIcon from "@mui/icons-material/Logout";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import ViewEvents from "../Components/Profile/ViewEvents";
import AddEvent from "../Components/Profile/AddEvent";

function Page() {
  const [viewEvents,setViewEvents] = useState(true);
  const handleView = (e)=>{
    e.target.style.color = '#f45725';
    setViewEvents(true);
  }
  const handleAdd = ()=>{
    setViewEvents(false);
  }

  return (
    <div className="Page_main">
      <div className="Page">
        <div className="page_left">
          <div className="page_left_content">
            <div className="page_left_userInfo">
              <h2 className="page_left_title">Dashboard</h2>
              <div className="member_img">
                <img
                  src="https://images.unsplash.com/photo-1682695797873-aa4cb6edd613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt=""
                />
              </div>
              <div className="user_name_desig">
                <h2 className="user_name">Binay Kumar Sahu</h2>
                <p className="designation">Sr Creative executive</p>
              </div>
            </div>
            <div className="page_left_options">
              <p>
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
              <p>
                <LogoutIcon />
                Logout
              </p>
            </div>
          </div>
          <div className="vertical_line"></div>
        </div>
        <div className="page_right">
          <div className="page_right_info">
            <div className="info_headers">
              <p onClick={handleView} style={{color:viewEvents?'#f45725':'white'}}>View Events</p>
              <p onClick={handleAdd} style={{color:!viewEvents?'#f45725':'white'}}>Add Events</p>
            </div>
            <div className="info_content">
              {viewEvents&&<ViewEvents />}
              {!viewEvents&&<AddEvent/>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
