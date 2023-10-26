import React, { useState, useEffect, useContext } from "react";

// Components
import RegisterCards from "./RegisterCards";
import RegForm from "../../Events/card/regForm";

// state
import AuthContext from "../../../store/auth-context";

// axios
import axios from "axios";

// MicroInterAction
import { getOrdinal } from "../../../MicroInterAction/ordinal";
import { Alert } from "../../../MicroInterAction/Alert";

// data
import { eventDetails } from "../page1/eventDetails";

// css
import RegCss from "./Register.module.css";

export default function Main() {
  var [fplform, setfplform] = useState({});
  var [logoform, setlogoform] = useState({});
  var [sitcomform, setsitcomform] = useState({});
  const [currentform, setCurentForm] = useState("");
  const [showPopUp, setShowPopUp] = useState(false);
  var [pitchersform, setpitchersform] = useState({});
  const [isRegistered, setIsRegistered] = useState([]);
  const [currentformelement, setCurentFormElement] = useState([]);
  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });

  const pitchersformid = "65396d193bfd20c9bfb1079a";
  const fplformid = "65396c993bfd20c9bfb10791";
  const sitcomformid = "65396db33bfd20c9bfb107a0";
  const logoformid = "65396e453bfd20c9bfb107a4";

  const authCtx = useContext(AuthContext);

  const getform = (data, formid) => {
    var res = data
      .filter((e) => e._id == formid)
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
    res[0].formelement = res[0].formelement.map((e) => {
      var temp = {};
      temp.name = e.name;
      temp.type = e.type;
      temp.placeholder = "Enter your " + e.name;
      temp.required = true;
      temp.value = e.value;
      return temp;
    });
    return res[0];
  };

  const getEvent = async () => {
    var result = await axios.get("/form/getactiveform");
    if (result.status == 200) {
      // var pitchersform = result.data
      //   .filter((e) => e._id == pitchersform)
      //   .map((e, idx) => {
      //     var temp = {};
      //     temp.formid = e._id;
      //     temp.title = e.title;
      //     var date = new Date(e.date);
      //     temp.date = date.getDate();
      //     temp.month = date.toLocaleString("default", { month: "long" });
      //     temp.img = e.img;
      //     temp.dis = {};
      //     temp.dis.d1 = e.description.split("\n")[0];
      //     temp.dis.d2 = e.description.split("\n")[1];
      //     temp.dis.d3 = e.description.split("\n")[2];
      //     temp.dis.d4 = e.description.split("\n")[3];
      //     temp.dis.d5 = e.description.split("\n")[4];
      //     temp.isLive = e.active;
      //     temp.amount = e.amount;
      //     temp.upi = e.upi;
      //     temp.formelement = e.formelement;
      //     temp.isTeam = e.isTeam;
      //     temp.superscript = getOrdinal(temp.date);
      //     return temp;
      //   });

      setpitchersform(getform(result.data, pitchersformid));
      setfplform(getform(result.data, fplformid));
      setsitcomform(getform(result.data, sitcomformid));
      setlogoform(getform(result.data, logoformid));
    }
    var result = await axios.get("/form/getuserform", {
      headers: { Authorization: authCtx.token },
    });
    setIsRegistered(result.data);
  };

  // scroll to top
  useEffect(() => {
    getEvent();
    window.scrollTo(0, 0);
  }, []);

  const cards = eventDetails.map((event, idx) => {
    var alreadyRegistered = false;
    var formelement = {};
    var formid = "";
    if (event.name == "Sitcom saga") {
      alreadyRegistered = isRegistered.includes(sitcomformid);
      formelement = sitcomform;
      formid = sitcomformid;
    }
    if (event.name == "Pitchers") {
      alreadyRegistered = isRegistered.includes(pitchersformid);
      formelement = pitchersform;
      formid = pitchersformid;
    }
    if (event.name == "Fed Premier League") {
      alreadyRegistered = isRegistered.includes(fplformid);
      formelement = fplform;
      formid = fplformid;
    }
    if (event.name == "Logo Making") {
      alreadyRegistered = isRegistered.includes(logoformid);
      formelement = logoform;
      formid = logoformid;
    }
    const showform = (form, id) => {
      setCurentForm(id);
      setCurentFormElement(form);
      setShowPopUp(true);
    };
    return (
      <RegisterCards
        key={idx}
        logo={event.logo}
        img={event.image}
        desc={event.description}
        showform={showform}
        isRegistered={alreadyRegistered}
        formelement={formelement}
        formid={formid}
      />
    );
  });

  return (
    <div className={RegCss.main}>
      <div className={RegCss.events}>EVENTS.</div>
      <div className={RegCss.regCards}>{cards}</div>
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
