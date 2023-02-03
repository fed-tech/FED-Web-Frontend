import React from "react";
import "./css/err.css";
function Err() {
  return (
    <div>
      <div className="err_">
        <p className="err_box">404</p>
        <p className="err_message1">Not Found</p>
        <p className="err_message2">
          The resource requested could not be found on this server
        </p>
      </div>
    </div>
  );
}
export default Err;
