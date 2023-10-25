import React, { useContext, useEffect, useState } from "react";

// Components
import ViewEvents from "./ViewEvents";
import AddEvent from "./AddEvent";

// css
import "../../../css/Profile/Dashboard/EventAdmin/EventAdmin.css";

// import axios from "axios";
import AuthContext from "../../../../store/auth-context";

function EventAdmin() {
  const [viewEvents, setViewEvents] = useState(true);
  const [showEvent, setShow] = useState(false);
  const [cardNo, setCardNo] = useState("");
  const authCtx = useContext(AuthContext);
  const handleView = (e) => {
    e.target.style.color = "#f45725";
    setViewEvents(true);
    setShow(false)
  };
  const handleAdd = () => {
    setViewEvents(false);
  };
  return (
    <div className="page_right_info">
      <div className="info_headers">
        <p
          onClick={handleView}
          style={{ color: viewEvents ? "#f45725" : "white" }}
        >
          View Events
        </p>
        <p
          onClick={handleAdd}
          style={{ color: !viewEvents ? "#f45725" : "white" }}
        >
          Add Events
        </p>
      </div>
      <div className="info_content">
        {viewEvents && <ViewEvents showEvent = {showEvent} setShow = {setShow} setCardNo = {setCardNo} cardNo= {cardNo}/>}
        {!viewEvents && <AddEvent setViewEvents={setViewEvents} />}
      </div>
    </div>
  );
}

export default EventAdmin;
