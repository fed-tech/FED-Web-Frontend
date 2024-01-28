import React, { useContext, useEffect, useState } from "react";

// Components
import ViewEvents from "./ViewEvents";
import AddEvent from "./AddEvent";

// css
import "../../../css/Profile/Dashboard/EventAdmin/EventAdmin.css";

// import axios from "axios";
import AuthContext from "../../../../store/auth-context";

function EventAdmin({setError}) {

  const authCtx = useContext(AuthContext); // Access AuthContext
  const [designation, setDesignation] = useState("");
  const [viewEvents, setViewEvents] = useState(true);
  const [showEvent, setShow] = useState(false);
  const [cardNo, setCardNo] = useState("");

  const handleView = (e) => {
    e.target.style.color = "#f45725";
    setViewEvents(true);
    setShow(false)
  };
  const handleAdd = () => {
    setViewEvents(false);
  };

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
  }, [authCtx.user.access]);

  return (
    <div className="page_right_info">
      <div className="info_headers">
        {designation === "Admin" ? (
          <div>
            <div
              className="ViewEvents"
              onClick={handleView}
              style={{ color: viewEvents ? "#f45725" : "white" }}
            >
              View Events
            </div>
            <div
              className="AddEvents"
              onClick={handleAdd}
              style={{ color: !viewEvents ? "#f45725" : "white" }}
            >
              Add Events
            </div>
          </div>
        ) : (<div></div>)}
        {designation === "Member" ? (
          <div>
            <div
              className="ViewEvents"
              onClick={handleView}
              style={{ color: "#f45725" }}
            >
              View Events
            </div>
          </div>
        ): (<div></div>)}
      </div>
      <div className="info_content">
        {viewEvents && <ViewEvents setError={setError} showEvent = {showEvent} setShow = {setShow} setCardNo = {setCardNo} cardNo= {cardNo}/>}
        {!viewEvents && <AddEvent setError={setError} setViewEvents={setViewEvents} />}
      </div>
    </div>
  );
}

export default EventAdmin;
