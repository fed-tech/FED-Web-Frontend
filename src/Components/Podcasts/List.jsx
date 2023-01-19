import React from "react";
function List(props) {
  return (
    <>
      <div className="container1">
        <div className="container2">
          <iframe
            className="video_content"
            width="100%"
            height="480"
            src={props.link}
            title="Empowering through Innovation | EP 03 | The FEDpreneur Show"
            frameborder="0"
            allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="descriptiondiv">
        <h4 className="heading1">Description:</h4>
        <p className="firstdiv">{props.para}</p>
      </div>
    </>
  );
}
export default List;
