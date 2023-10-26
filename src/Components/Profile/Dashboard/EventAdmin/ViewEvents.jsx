import React, { useEffect, useState } from "react";

// Componentss
import EventDetails from "../../EventDetails";
import EventCards from "../../EventCards";

//  axios
import axios from "axios";

// css
import "../../../css/Profile/Dashboard/EventAdmin/ViewEvents.css";

function ViewEvents({ showEvent, setShow, setCardNo, cardNo }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    loadEvents();
  }, [showEvent]);

  const loadEvents = async () => {
    try {
      const response = await axios.get("/event/getevent");
      if (response.status === 200) {
        setEvents(response.data.event);
      } else {
        console.log("Did not recieve events");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="viewEventss">
      {showEvent ? (
        <div className="viewEventDets">
          <EventDetails cardNo={cardNo} setShow={setShow} />
        </div>
      ) : (
        <div className="viewevents">
          {events.length == 0 ? (
            <>
              <div style={{ marginLeft: "20%" }}>
                <h2>No Events Found</h2>
              </div>
            </>
          ) : (
            events.map((i, idx) => (
              <EventCards
                key={idx}
                info={i}
                setShow={setShow}
                setCardNo={setCardNo}
                cardNo={cardNo}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default ViewEvents;
