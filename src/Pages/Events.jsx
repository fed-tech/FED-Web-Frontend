import React, { useEffect, useState, useContext } from "react";

// Components
import Card from "../Components/Events/card/Card";
import CardPrev from "../Components/Events/card/CardPrev";
import Header from "../Components/Events/header/jsx/Header.jsx";
import Loading from "../MicroInterAction/Loading";
import AuthContext from "../store/auth-context";
import { getOrdinal } from "../MicroInterAction/ordinal.js";
import axios from "axios";
import "../Components/Team/css/loading.css";

export default function Events({ setError }) {
  const [eventcard, setEvent] = useState([]);
  const [loading, setLoading] = useState(true);

  const authCtx = useContext(AuthContext);

  const getEvent = async () => {
    try {
      var result = await axios.get("/form/getactiveform");
      if (result.status == 200) {
        var final = result.data.map((e, idx) => {
          var temp = {};
          temp.formid = e._id;
          temp.title = e.title;
          var date = new Date(e.date);
          temp.rawdate = e.date;
          temp.date = date.getDate();
          temp.month = date.toLocaleString("default", { month: "long" });
          temp.img = e.img;
          temp.dis = {};
          temp.dis = e.description;
          temp.isLive = e.active;
          temp.amount = e.amount;
          temp.upi = e.upi;
          temp.formelement = e.formelement;
          temp.isTeam = e.isTeam;
          temp.superscript = getOrdinal(temp.date);
          return temp;
        });
        if (authCtx.isLoggedIn) {
          var result = await axios.get("/form/getuserform", {
            headers: { Authorization: authCtx.token },
          });
          final.forEach((e) => {
            if (result.data.includes(e.formid)) {
              e.isRegistered = true;
            } else {
              e.isRegistered = false;
            }
          });
        }
        var categorised = {};
        categorised.upcoming = final.filter((e) => {
          var formDate = new Date(e.rawdate);
          var todayDate = new Date();
          return formDate > todayDate && e.isLive;
        });
        categorised.ongoing = final.filter((e) => {
          var formDate = new Date(e.rawdate);
          var todayDate = new Date();
          return formDate < todayDate && e.isLive;
        });
        categorised.closed = final.filter((e) => !e.isLive);
        setEvent(categorised);
        setLoading(false);
      }
    } catch (err) {}
  };

  const getRegisteredEvent = async () => {
    console.log("called");
    if (authCtx.isLoggedIn) {
      var result = await axios.get("/form/getuserform", {
        headers: { Authorization: authCtx.token },
      });
    }
    // console.log(result.data);
    var final = eventcard;
    final.forEach((e) => {
      if (result.data.includes(e.formid)) {
        e.isRegistered = true;
      } else {
        e.isRegistered = false;
      }
    });
    var categorised = {};
    categorised.upcoming = final.filter((e) => {
      var formDate = new Date(e.rawdate);
      var todayDate = new Date();
      return formDate > todayDate && e.isLive;
    });
    categorised.ongoing = final.filter((e) => {
      var formDate = new Date(e.rawdate);
      var todayDate = new Date();
      return formDate < todayDate && e.isLive;
    });
    categorised.closed = final.filter((e) => !e.isLive);
    setEvent(categorised);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getEvent();
    getRegisteredEvent();
  }, []);
  return (
    <div className="mEventsDiv">
      <div>
        {Object.keys(eventcard).includes("ongoing") ?<Header head="Ongoing Events" />:<></>}
        {loading ? (
          <Loading />
        ) : (
          <Card eventcard={eventcard.ongoing} setError={setError} />
        )}
      </div>
      <div>
        {Object.keys(eventcard).includes("upcomming") ? (
          <Header head="Upcoming Events" />
        ) : (
          <></>
        )}
        {loading ? (
          <Loading />
        ) : (
          <Card eventcard={eventcard.upcoming} setError={setError} />
        )}
      </div>
      <div>
        <Header head="Previous Events" />
        <div>
          {loading ? (
            <Loading />
          ) : (
            <Card eventcard={eventcard.closed} setError={setError} />
          )}
        </div>
        <CardPrev />
      </div>
    </div>
  );
}
