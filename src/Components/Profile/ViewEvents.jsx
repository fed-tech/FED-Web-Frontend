import React, { useEffect, useState } from "react";

// Components
import EventCards from "./EventCards";

// css
import "./css/ViewEvents.css";

// axios
import axios from "axios";

function ViewEvents() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/event/getevent").then((res) => {
      setEvents(res.data.event);
    });
  }, []);
  return (
    <div className="viewevents">
      {/* <EventCards/>
        <EventCards/>
        <EventCards/>
        <EventCards/>
        <EventCards/>
        <EventCards/>
        <EventCards/>
        <EventCards/>
        <EventCards/> */}
      {events.map((i, idx) => (
        <EventCards key={idx} info={i} />
      ))}
    </div>
  );
}

export default ViewEvents;
