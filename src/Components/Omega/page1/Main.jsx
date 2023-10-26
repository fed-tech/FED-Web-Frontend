import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

// Components
import EventCard from "./cards/EventCard";
import RegForm from "../../Events/card/regForm";

// MicroInterAction
import { Alert } from "../../../MicroInterAction/Alert";
import { getOrdinal } from "../../../MicroInterAction/ordinal";

// axios
import axios from "axios";

// css
import OMCss from "./Main.module.css";

// state
import AuthContext from "../../../store/auth-context";

// img
import click from "../../../assets/Omega/Maskgroup.svg";
import omegaRetro from "../../../assets/Omega/omegaRetro.webp";

// data
import { eventDetails } from "./eventDetails";

export default function Main(props) {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // form ID
  const omegaformid = "653969a83bfd20c9bfb1078b";

  const authCtx = useContext(AuthContext);
  const redirect = useNavigate();
  const [eventcard, setEvent] = useState([]);
  const [currentform, setCurentForm] = useState("");
  const [showPopUp, setShowPopUp] = useState(false);
  const [formLoading, setFormLoading] = useState(true);
  const [isRegistered, setIsRegistered] = useState(false);
  const [currentformelement, setCurentFormElement] = useState([]);
  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });

  const getEvents = async () => {
    var result = await axios.get("/form/getactiveform");
    if (result.status == 200) {
      var final = result.data
        .filter((e) => e._id == omegaformid)
        .map((e, idx) => {
          var temp = {};
          temp.formid = e._id;
          temp.title = e.title;
          var date = new Date(e.date);
          temp.date = date.getDate();
          temp.month = date.toLocaleString("default", { month: "long" });
          temp.img = e.img;
          temp.dis = {};
          temp.dis.d1 = e.description.split("\n")[0];
          temp.dis.d2 = e.description.split("\n")[1];
          temp.dis.d3 = e.description.split("\n")[2];
          temp.dis.d4 = e.description.split("\n")[3];
          temp.dis.d5 = e.description.split("\n")[4];
          temp.isLive = e.active;
          temp.amount = e.amount;
          temp.upi = e.upi;
          temp.formelement = e.formelement;
          temp.isTeam = e.isTeam;
          temp.superscript = getOrdinal(temp.date);
          return temp;
        });
      final.length != 0 ? setCurentForm(final[0].formid) : null;
      final.length != 0
        ? (final[0].formelement = final[0].formelement.map((e) => {
            var temp = {};
            temp.name = e.name;
            temp.type = e.type;
            temp.placeholder = "Enter your " + e.name;
            temp.required = true;
            temp.value = e.value;
            return temp;
          }))
        : null;
      final.length != 0 ? setCurentFormElement(final[0]) : null;
      if (authCtx.isLoggedIn) {
        var result = await axios.get("/form/getuserform", {
          headers: { Authorization: authCtx.token },
        });
        console.log(result.data);
        final.forEach((e) => {
          if (result.data.includes(e.formid)) {
            setIsRegistered(true);
          } else {
            setIsRegistered(false);
          }
        });
      }
      console.log(final[0]);
      setEvent(final[0]);
      setFormLoading(false);
    }
  };

  const register = async () => {
    if (formLoading || (!eventcard.isLive && !isRegistered)) {
      return setError({
        mainColor: "#FFC0CB",
        secondaryColor: "#FF69B4",
        symbol: "pets",
        title: "Error",
        text: "Form Closed Or Loading !!!",
        val: true,
      });
    }
    if (authCtx.token == null) {
      authCtx.settarget("omega");
      redirect("/Login");
    } else {
      isRegistered ? props.setShift(true) : setShowPopUp(true);
    }
  };

  useEffect(() => {
    getEvents();
    if (authCtx.isLoggedIn) {
      setFormLoading(true);
    }
  }, []);

  useEffect(() => {
    getEvents();
    if (authCtx.isLoggedIn) {
      setFormLoading(true);
    }
  }, [showPopUp]);

  return (
    <div className={OMCss.main}>
      <div className={OMCss.registerBtn}>
        <div className={OMCss.image}>
          <img src={omegaRetro} alt="" />
        </div>
        <div className={OMCss.button} onClick={register}>
          <div className={OMCss.buttonText}>
            {formLoading
              ? "Loading..."
              : isRegistered
              ? "ENTER OMEGA"
              : eventcard.isLive
              ? "REGISTER NOW"
              : "REGISTRATION CLOSED"}
          </div>
          <div className={OMCss.buttonImage}>
            <img src={click} alt="" />
          </div>
        </div>
      </div>
      <div className={OMCss.cards}>
        {eventDetails.map((e) => {
          return (
            <EventCard
              name={e.name}
              image={e.image}
              logo={e.logo}
              date={e.date}
              month={e.month}
              description={e.description}
            />
          );
        })}
      </div>
      {showPopUp && (
        <RegForm
          showPopUp={showPopUp}
          setShowPopUp={setShowPopUp}
          setError={setError}
          formid={currentform}
          formelement={currentformelement}
        />
      )}
      <Alert variant={variants} val={setError} />
    </div>
  );
}
