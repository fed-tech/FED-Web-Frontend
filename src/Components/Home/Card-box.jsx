import React from "react";

export default function card(props) {
  return (
    <>
      <div className="testDiv">
        <p className="testpTag">{props.testi.testpTag}</p>
        <div className="userDiv">
          <div className="userDisDiv">
            <p className="userName">{props.testi.userName}</p>
            <p className="userPost">{props.testi.userPost}</p>
          </div>
        </div>
      </div>
    </>
  );
}
