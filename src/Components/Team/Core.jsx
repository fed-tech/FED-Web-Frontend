import React, { useEffect, useState } from "react";
import "./css/Core.css";

export default function Core(props) {
  const [showContent, setshowContent] = useState(true);
  const [show, setshow] = useState(false);
  // const [btn, setbtn] = useState("Know more");
  // const [content, setContent] = useState({
  // showAbout: false,
  // displayTeamAbout: "none",
  // displayPostPTagName: "block",
  // displayPostPTag: "block",
  // displayCoresocilaDiv: "block",
  // btnText: "Know More",
  // });
  //
  useEffect(() => {
    setTimeout(() => {
      setshowContent(false), setshow(true);
    }, 3000);
  });
  //
  const [teamAboutDisplay, setTeamAboutDisplay] = useState("none");
  // const [postPTagNameDisplay, setPostPTagNameDisplay] = useState("block");
  // const [postPTagDisplay, setPostPTagDisplay] = useState("block");
  // const [coresocialDivDisplay, setCoresocialDivDisplay] = useState("block");
  // const handleContentChange = () => {
  // const newContent = {
  // ...content,
  // showAbout: !content.showAbout,
  // displayTeamAbout: content.showAbout ? "none" : "block",
  // displayPostPTagName: content.showAbout ? "block" : "none",
  // displayPostPTag: content.showAbout ? "block" : "none",
  // displayCoresocilaDiv: content.showAbout ? "block" : "none",
  // btnText: content.showAbout ? "Know More" : "Close",
  // };
  // setContent(newContent);
  // setTeamAboutDisplay(newContent.displayTeamAbout);
  // setPostPTagNameDisplay(newContent.displayPostPTagName);
  // setPostPTagDisplay(newContent.displayPostPTag);
  // setCoresocialDivDisplay(newContent.displayCoresocilaDiv);
  // };
  return (
    <>
      {showContent ? (
        <div className="centerLoader">
          <div className="arc" />
          <h1 className="loadingSpanH1">
            <span className="loadingSpan">Loading</span>
          </h1>
        </div>
      ) : (
        <></>
      )}
      {show ? (
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="coreMemMainCard">
              <img src={props.mem.img} alt="" className="CorememCardImg" />
              <div className="hoverDetailsMDiv">
                <p className="PostPTagName">{props.mem.name}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
