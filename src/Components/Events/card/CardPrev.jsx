import React, { useState } from "react";

// Components
import RegForm from "./regForm";

// css
import ECss from "./Css/eventCard.module.css";

// data
import { eventcard } from "./../../../Data/eventcard.js";

export default function Card() {
  const [regLive, setRegLive] = useState(true);
  const [showPopUp, setShowPopUp] = useState(false);
  return (
    <div className={ECss.cards}>
      {eventcard.map((data) => {
        return (
          <div className={ECss.eventcard}>
            <div className={ECss.carddetails}>
              <div className={ECss.left}>
                <div className={ECss.datemonth}>
                  <p className={ECss.date}>
                    {data.date}{" "}
                    <span className={ECss.superscript}>{data.superscript}</span>
                  </p>
                  <p className={ECss.month}>{data.month}</p>
                </div>
                <img className={ECss.image} src={data.img} />
              </div>
              <div className={ECss.right}>
                <h1 className={ECss.title}>{data.title}</h1>
                <div className={ECss.eventDetail}>
                  {data.dis.d1}
                  <br />
                  <br />
                  {data.dis.d2}
                  <br />
                  <br />
                  {data.dis.d3}
                  <br />
                  <br />
                  {data.dis.d4}
                </div>
                {regLive ? (
                  <a className={ECss.regBtn} onClick={() => setShowPopUp(true)}>
                    Registration Open
                  </a>
                ) : (
                  <a className={ECss.regBtn}>
                    Registration Closed
                    <svg
                      width="20"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="lockSvg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M18 10.5C19.6569 10.5 21 11.8431 21 13.5V19.5C21 21.1569 19.6569 22.5 18 22.5H6C4.34315 22.5 3 21.1569 3 19.5V13.5C3 11.8431 4.34315 10.5 6 10.5V7.5C6 4.18629 8.68629 1.5 12 1.5C15.3137 1.5 18 4.18629 18 7.5V10.5ZM12 3.5C14.2091 3.5 16 5.29086 16 7.5V10.5H8V7.5C8 5.29086 9.79086 3.5 12 3.5ZM18 12.5H6C5.44772 12.5 5 12.9477 5 13.5V19.5C5 20.0523 5.44772 20.5 6 20.5H18C18.5523 20.5 19 20.0523 19 19.5V13.5C19 12.9477 18.5523 12.5 18 12.5Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        );
      })}
      {showPopUp && (
        <RegForm showPopUp={showPopUp} setShowPopUp={setShowPopUp} />
      )}
    </div>
  );
}
