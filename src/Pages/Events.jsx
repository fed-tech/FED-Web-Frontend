import React, { useEffect, useState, useContext } from "react";

// Components
import Card from "../Components/Events/card/Card";
import CardPrev from "../Components/Events/card/CardPrev";
import Header from "../Components/Events/header/jsx/Header.jsx";
import { Alert } from "../MicroInterAction/Alert";
import AuthContext from "../store/auth-context";
import { getOrdinal } from "../MicroInterAction/ordinal.js";
import axios from "axios";
import "../Components/Team/css/loading.css";

export default function Events() {
  const [eventcard, setEvent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });

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
    if (authCtx.isLoggedIn) {
      var result = await axios.get("/form/getuserform", {
        headers: { Authorization: authCtx.token },
      });
    }
    console.log(result.data);
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
    console.log(categorised)
    setEvent(categorised);
    setShowPopUp(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getEvent();
    getRegisteredEvent();
  }, []);
  // scroll to top
  useEffect(() => {
    console.log(eventcard);
  }, [eventcard]);

  return (
    <div className="mEventsDiv">
        <div>
          <Header head="Ongoing Events" />
          {loading ? (
            <div className="centerLoader">
              <div className="arc" />
              <h1 className="loadingSpanH1">
                <span className="loadingSpan">Loading</span>
              </h1>
            </div>
          ) : (
            <Card eventcard={eventcard.ongoing} setError={setError} />
          )}
        </div>
        <div>
          <Header head="Upcoming Events" />
          {loading ? (
            <div className="centerLoader">
              <div className="arc" />
              <h1 className="loadingSpanH1">
                <span className="loadingSpan">Loading</span>
              </h1>
            </div>
          ) : (
            <Card eventcard={eventcard.upcoming} setError={setError} />
          )}
        </div>

      <div>
        <Header head="Previous Events" />
          <div>
            {loading ? (
              <div className="centerLoader">
                <div className="arc" />
                <h1 className="loadingSpanH1">
                  <span className="loadingSpan">Loading</span>
                </h1>
              </div>
            ) : (
              <Card eventcard={eventcard.closed} setError={setError} />
            )}
          </div>
        <CardPrev />
      </div>
      <Alert variant={variants} val={setError} />
    </div>
  );
}
