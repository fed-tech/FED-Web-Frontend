import React, { useState } from "react";

// Components
import AddEvent from "./AddEvent";
import ViewEvents from "./ViewEvents";

function EventAdmin() {
  const [viewEvents, setViewEvents] = useState(true);

  const handleView = (e) => {
    e.target.style.color = "#f45725";
    setViewEvents(true);
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
        {viewEvents && <ViewEvents />}
        {!viewEvents && <AddEvent />}
      </div>
    </div>
  );
}

export default EventAdmin;
