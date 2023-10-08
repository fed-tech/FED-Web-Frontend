import React, { useRef, useEffect, useState, useContext } from "react";

// css
import formCss from "../Profile/cssp/EventForm.module.css";
import AddField from "./AddField";
import { Alert } from "../../MicroInterAction/Alert";
import axios from "axios";
import AuthContext from "../../store/auth-context";
export default function Form() {
  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });
  const [showFields, setShowFields] = useState({ fields: [{}] });
  const [hideAmount, sethideAmount] = useState(true);
  const [eventList, setEventList] = useState([]);
  const [selectedEventType, setSelectedEventType] = useState("");

  const authCtx = useContext(AuthContext);
  const initialFormState = {
    formTitle: "",
    description: "",
    eventName: "",
    eventType: "",
    amount: hideAmount ? 0 : "",
    priority: "",
    maxReg: 0,
    fields: [{}],
  };

  const sendData = async (formDetails) => {
    try {
      console.log("Check form save");
      const res = await axios.post(
        "/form/addForm",
        {
          title: formDetails.formTitle,
          description: formDetails.description,
          amount: formDetails.amount,
          priority: formDetails.priority,
          formelement: formDetails.fields,
          event: formDetails.eventName,
          maxReg: formDetails.maxReg,
        },
        {
          headers: {
            Authorization: authCtx.token,
          },
        }
      );
      if (res.status == 200) {
        window.scrollTo(0, 0);
        setShowFields(initialFormState);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();

    if (hideAmount) {
      setShowFields((prev) => {
        const formData = { ...prev, amount: 0 };
        return formData;
      });
    }
    const formDetails = showFields;
    if (
      formDetails.formTitle === "" ||
      formDetails.description === "" ||
      (hideAmount
        ? formDetails.amount === ""
        : formDetails.amount === 0 || formDetails.amount === "") ||
      formDetails.priority === "" ||
      formDetails.eventName == "" ||
      formDetails.maxReg === 0 ||
      formDetails.maxReg === ""
    ) {
      setError({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "Please fill all the fields",
        val: true,
      });
      return;
    } else {
      var flag = false;
      formDetails.fields.forEach((element) => {
        if (Object.keys(element).length == 3) {
          flag = false;
          if (element.name == "" || element.type == "" || element.value == "") {
            setError({
              mainColor: "#FDEDED",
              secondaryColor: "#F16360",
              symbol: "error",
              title: "Error",
              text: "Please fill all the fields",
              val: true,
            });
            return;
          }
          flag = true;
        } else {
          flag = false;
          setError({
            mainColor: "#FDEDED",
            secondaryColor: "#F16360",
            symbol: "error",
            title: "Error",
            text: "Please fill all the fields",
            val: true,
          });
          return;
        }
      });
      if (flag) {
        sendData(formDetails);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShowFields((prev) => {
      const formData = { ...prev, [name]: value };
      return formData;
    });
  };

  const handleDelete = (e, idx) => {
    e.preventDefault();
    console.log("deleted", idx);
    setShowFields((prev) => {
      const updatedFields = { ...prev };
      updatedFields.fields.splice(idx, 1);
      return updatedFields;
    });
  };

  const fields = showFields.fields.map((i, idx) => {
    return (
      <AddField
        key={idx}
        idx={idx}
        setShowFields={setShowFields}
        showFields={showFields}
        handleDelete={(e) => handleDelete(e, idx)}
      />
    );
  });

  const handleAdd = (event) => {
    event.preventDefault();
    setShowFields((prev) => {
      const currState = { ...prev };
      currState.fields.push({});
      return currState;
    });
  };

  const handleDropDownChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedEventType(selectedValue);
    console.log("check");
    if (selectedValue === "paid") {
      sethideAmount(false);
    } else {
      sethideAmount(true);
    }
  };

  const handleFormError = (e) => {
    e.preventDefault();
    setError({
      mainColor: "#FFC0CB",
      secondaryColor: "#FF69B4",
      symbol: "pets",
      title: "Error",
      text: "Please fill all the required fields",
      val: true,
    });
    setTimeout(() => {
      setError({
        mainColor: "",
        secondaryColor: "",
        symbol: "",
        title: "",
        text: "",
        val: false,
      });
    }, 6000);
  };

  // const formBottomRef = useRef(null);

  // useEffect(() => {
  //     const formBottom = formBottomRef.current;
  //     formBottom.addEventListener('wheel', (event) => {
  //     if (event.deltaY !== 0) {
  //         event.preventDefault();
  //         formBottom.scrollLeft += event.deltaY;
  //     }
  //     });
  // }, []);

  const getEvent = async () => {
    const res = await axios.get("/event/getevent");
    if (res.data.Success) {
      setEventList(res.data.event);
    }
  };

  useEffect(() => {
    getEvent();
  }, []);

  //   useEffect(() => {
  //     console.log(eventList);
  //   }, [eventList]);

  return (
    <>
      {/* <button onClick={getEvent()}>blah</button> */}
      <div className={formCss.head}>
        <h1>NEW FORM</h1>
      </div>
      <form
        action=""
        className={formCss.formDiv}
        onSubmit={handleSave}
        onInvalid={handleFormError}
      >
        <input
          onChange={handleChange}
          name="formTitle"
          type="text"
          className={formCss.formtitle}
          placeholder="Form Title*"
          required
          value={showFields.formTitle || ""}
        />
        <input
          onChange={handleChange}
          name="description"
          type="text"
          className={formCss.formtitle}
          placeholder="About Form*"
          value={showFields.description || ""}
          required
        />
        <select
          id="eventType"
          name="eventName"
          className={formCss.formtitle}
          onChange={handleChange}
          required
          value={showFields.eventName || ""}
        >
          <option value="" hidden>
            Related Event Name*
          </option>
          {eventList.map((element) => {
            return (
              <option
                value={element._id}
                className={formCss.formDropDownOption}
              >
                {element.title}
              </option>
            );
          })}
        </select>
        <select
          id="eventType"
          name="eventType"
          className={formCss.formtitle}
          onChange={handleDropDownChange}
          required
          value={showFields.eventType || ""}
        >
          <option value="" hidden>
            {selectedEventType === "paid"
              ? "Paid"
              : selectedEventType === "free"
              ? "Free"
              : "Event Type*"}
          </option>
          <option value="paid" className={formCss.formDropDownOption}>
            Paid
          </option>
          <option value="free" className={formCss.formDropDownOption}>
            Free
          </option>
        </select>
        <input
          id="amount"
          onChange={handleChange}
          hidden={hideAmount}
          required={!hideAmount}
          name="amount"
          type="number"
          className={formCss.formtitle}
          placeholder="Amount*"
          value={showFields.amount || ""}
        />
        <input
          onChange={handleChange}
          required
          name="priority"
          type="number"
          className={formCss.formtitle}
          placeholder="Priority*"
          value={showFields.priority || ""}
        />
        <input
          onChange={handleChange}
          required
          name="maxReg"
          type="number"
          className={formCss.formtitle}
          placeholder="Max Registrations Allowed*"
          value={showFields.maxReg || ""}
        />
        {fields}
        <div>
          <button className={formCss.saveBtn} onClick={handleAdd}>
            ADD FIELD
          </button>
          <button
            type="submit"
            className={formCss.saveBtn}
            onClick={handleSave}
          >
            SAVE
          </button>
        </div>
      </form>
      <Alert variant={variants} val={setError} />
    </>
  );
}
