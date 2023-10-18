import React, { useContext, useEffect, useState } from "react";

// Components
import PopUp1 from "./PopUp1";
import PopUp2 from "./PopUp2";
import PopUp3 from "./PopUp3";
import Load from "./../../../../MicroInterAction/Load";
import { Alert } from "./../../../../MicroInterAction/Alert";

// axios
import axios from "axios";

// Context
import AuthContext from "./../../../../store/auth-context";

// img
import cancel from "./../../../../assets/SkillHunt/XCircle.png";

// css
import "./../Css/SkillHunt.css";

function PopUpModal({ setShowPopUp, setSuccess, setRegStatus }) {
  const [count, setCount] = useState(1);
  const [loadingEffect, setLoad] = useState(false);
  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });

  const authCtx = useContext(AuthContext);

  const [info, setInfo] = useState({
    formid: "64c29e1a4e0aca04b0f34b47",
    age: "",
    workshops: {
      cloud: false,
      trade: false,
      graphics: false,
    },
    speaker: "Yes",
    previousEvent: "",
    gotToKnow: "",
    referral: "",
    transaction: "",
  });

  const dataInp = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handlePrev = () => {
    setCount((prev) => prev - 1);
  };

  const {
    age,
    workshops,
    speaker,
    previousEvent,
    gotToKnow,
    referral,
    transaction,
  } = info;


  const handleNext = () => {
    if (count === 1) {
      if (
        age != "" &&
        Object.values(workshops).includes(true)
        //  &&
        // speaker != ""
      ) {
        console.log(info);
        setCount((prev) => prev + 1);
        console.log("Count->", count);
      } else {
        setError({
          mainColor: "#FFC0CB",
          secondaryColor: "#FF69B4",
          symbol: "pets",
          title: "Check it out",
          text: "Please Fill All The Details",
          val: true,
        });
      }
    } else if (count === 2) {
      if (previousEvent != "") {
        if (gotToKnow != "") {
          if (
            gotToKnow != "Referral" ||
            (gotToKnow === "Referral" && referral != "")
          ) {
            setCount((prev) => prev + 1);
          } else {
            setError({
              mainColor: "#FFC0CB",
              secondaryColor: "#FF69B4",
              symbol: "pets",
              title: "Check it out",
              text: "Please Fill All The Details",
              val: true,
            });
          }
        } else {
          setError({
            mainColor: "#FFC0CB",
            secondaryColor: "#FF69B4",
            symbol: "pets",
            title: "Check it out",
            text: "Please Fill All The Details",
            val: true,
          });
        }
      } else {
        setError({
          mainColor: "#FFC0CB",
          secondaryColor: "#FF69B4",
          symbol: "pets",
          title: "Check it out",
          text: "Please Fill All The Details",
          val: true,
        });
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoad(true);
    if (
      age != "" &&
      Object.values(workshops).includes(true) &&
      // speaker != "" &&
      previousEvent != "" &&
      gotToKnow != "" &&
      transaction != "" &&
      transaction.length == 4
    ) {
      try {
        console.log(info);
        const response = await axios.post("/form/register", info, {
          headers: { Authorization: `${authCtx.token}` },
        });
        console.log(response);
        if (response.status === 200) {
          setLoad(false);
          console.log(info);
          setSuccess(true);
          setShowPopUp(false);
          setRegStatus(true);
        }
      } catch (err) {
        setLoad(false);
        console.log(err);
        setError({
          mainColor: "#FDEDED",
          secondaryColor: "#F16360",
          symbol: "error",
          title: "Error",
          text: "An Unexpected Error Occurred",
          val: true,
        });
      }
    } else {
      setLoad(false);

      setError({
        mainColor: "#FFC0CB",
        secondaryColor: "#FF69B4",
        symbol: "pets",
        title: "Check it out",
        text: "Please Fill All The Details",
        val: true,
      });
    }
  };

  return (
    <>
      <div id="popm">
        <div class="popmDivcontent" id="form1">
          <div class="popCOntentDiv">
            <img
              src={cancel}
              alt=""
              onClick={() => setShowPopUp(false)}
              id="CloseIcon"
            />
            <form data-multi-step class="single-form">
              {count === 1 && (
                <PopUp1 dataInp={dataInp} info={info} setInfo={setInfo} />
              )}
              {count === 2 && <PopUp3 dataInp={dataInp} info={info} />}
              {count === 3 && <PopUp2 dataInp={dataInp} info={info} />}
            </form>
            <div class="btn">
              {count > 1 && (
                <button
                  type="button"
                  data-previous
                  class="NextBtn PreviousBTnDes"
                  onClick={handlePrev}
                >
                  Previous
                </button>
              )}
              {count >= 3 && (
                <button type="button" class="NextBtn" onClick={handleSubmit}>
                  {loadingEffect ? <Load /> : "Submit"}
                </button>
              )}
              {count < 3 && (
                <button type="button" class="NextBtn" onClick={handleNext}>
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <Alert variant={variants} val={setError} />
    </>
  );
}

export default PopUpModal;
