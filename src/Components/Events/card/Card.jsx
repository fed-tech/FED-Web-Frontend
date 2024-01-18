import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

// Components
import RegForm from "./regForm";
import AuthContext from "../../../store/auth-context";

// css
import "../../css/Events/eventCard.css";
import "../../Team/css/loading.css";

export default function Card({ eventcard, setError}) {
  // const [eventcard, setEvent] = useState([]);
  const [showPopUp, setShowPopUp] = useState(false);
  const [currentform, setCurentForm] = useState("");
  const [currentformelement, setCurentFormElement] = useState([]);
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegClick = (ele) => {
    if (!authCtx.isLoggedIn) {
      setError({
        mainColor: "#FFC0CB",
        secondaryColor: "#FF69B4",
        symbol: "pets",
        title: "Check it out",
        text: "Please Login Before Registration",
        val: true,
      });
      return navigate("/login");
    }
    setCurentForm(ele.target.id);
    eventcard.forEach((e) => {
      if (e.formid == ele.target.id) {
        e.formelement = e.formelement.map((e) => {
          var temp = {};
          temp.name = e.name;
          temp.type = e.type;
          temp.placeholder = e.value != null ? e.value : "Enter your " + e.name;
          temp.required = true;
          temp.value = e.value;
          return temp;
        });

        setCurentFormElement(e);
        setShowPopUp(true);
      }
    });
  };
  return (
    <div className="cards">
      {eventcard.map((data) => {
        return (
          <div className="eventcard">
            <div className="carddetails">
              <div className="left">
                <div className="datemonth">
                  <p className="date">
                    {data.date}{" "}
                    <span className="superscript">{data.superscript}</span>
                  </p>
                  <p className="month">{data.month}</p>
                </div>
                <img className="image" src={data.img} />
              </div>
              <div className="right">
                <h1 className="title">{data.title}</h1>
                <div className="eventDetail">{data.dis}</div>
                {data.isRegistered ? (
                  <a className="regBtn block">
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
                        fill="#f45725"
                      ></path>
                    </svg>
                    Already Registered
                  </a>
                ) : data.isLive ? (
                  <a
                    className="regBtn"
                    id={data.formid}
                    onClick={handleRegClick}
                  >
                    Registration Open
                  </a>
                ) : (
                  <a className="regBtn block">
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
                        fill="#f45725"
                      ></path>
                    </svg>
                    &nbsp;Registration Closed
                  </a>
                )}
              </div>
            </div>
          </div>
        );
      })}

      {showPopUp && (
        <RegForm
          showPopUp={showPopUp}
          setShowPopUp={setShowPopUp}
          setError={setError}
          formid={currentform}
          formelement={currentformelement}
        />
      )}
    </div>
  );
}
