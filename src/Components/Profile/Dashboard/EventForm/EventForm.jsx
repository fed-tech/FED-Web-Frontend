import React, { useRef, useEffect, useState, useContext } from "react";

// Components
import AddField from "./AddField";

// css
import formCss from "../../../css/Profile/Dashboard/EventForm/EventForm.module.css";
import "react-datepicker/dist/react-datepicker.css";
import { Alert } from "../../../../MicroInterAction/Alert";
import axios from "axios";
import AuthContext from "../../../../store/auth-context";
import Load from "../../../../MicroInterAction/Load";

import DatePicker from "react-datepicker";

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
  const [showTeamsize,setShowTeamsize] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  const authCtx = useContext(AuthContext);

  const handleSave = async (e) => {
    setIsSaving(true)
    if (hideAmount) {
      setShowFields((prev) => {
        const formData = { ...prev, amount: 0 };
        return formData;
      });
    }
    if (!showTeamsize) {
      setShowFields((prev) => {
        const formData = { ...prev, teamsize: 0 };
        return formData;
      });
    }
    e.preventDefault();
    const formDetails = showFields;
    try {
      const res = await axios.post(
        "/form/addForm",
        {
          title: formDetails.formTitle,
          description: formDetails.forrmDesc,
          amount: formDetails.amount,
          priority: formDetails.priority,
          formelement: formDetails.fields,
          event: formDetails.eventName,
          isTeam: showTeamsize,
          teamsize:formDetails.teamSize,
          maxReg: formDetails.maxReg,
          upi: formDetails.upi,
          img: formDetails.formimg,
          date:formDetails.date
        },
        {
          headers: {
            Authorization: authCtx.token,
          },
        }
      );
      if (res.status == 200) {
        setShowFields({ fields: [{}] });
        e.target.reset()
        window.scrollTo(0, 0);
      }
    } catch (err) {
      console.log(err);
    }finally{
      setIsSaving(false)
    }
  };

  const handleChange = (e) => {
    if(e.target.type == "number" && e.target.value < 0){
      e.target.value = 0
    }
    const { name, value } = e.target;
    setShowFields((prev) => {
      const formData = { ...prev, [name]: value };
      return formData;
    });
  };
  const handleDateChange = (date) => {
    setShowFields((prev) => {
      const formData = { ...prev, date: date };
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
    console.log(e.target.name)  
    if (e.target.name == "eventType") {
      if (e.target.value === "paid") {
        sethideAmount(false);
      } else {
        sethideAmount(true);
      }
    } else if (e.target.name == "eventTeam") {
      if (e.target.value == "true") {
        setShowTeamsize(true);
      } else {
        setShowTeamsize(false);
      }
    }
  };
  useEffect(()=>{
    console.log(showTeamsize)
  },[showTeamsize])
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
      <div className={formCss.formDiv} style={{overflow:"auto",height:"100vh",paddingRight:"10px"}}>
      <form
        action=""
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
        />
        <textarea
          onChange={handleChange}
          name="forrmDesc"
          className={formCss.formtitle}
          placeholder="About Event*"
          required
        />
        <input
          onChange={handleChange}
          name="formimg"
          type="text"
          className={formCss.formtitle}
          placeholder="Form Logo*"
          required
        />
        <DatePicker
            selected={showFields.date}
            className={formCss.formtitle}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            placeholderText="dd/mm/yyyy"
          />
        <select
          id="eventType"
          name="eventName"
          className={formCss.formtitle}
          onChange={handleChange}
          required
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
        >
          <option value="" hidden>
            Event Type*
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
          name="amount"
          type="number"
          className={formCss.formtitle}
          placeholder="Amount*"
        />
        <input
          id="upi"
          onChange={handleChange}
          hidden={hideAmount}
          name="upi"
          type="text"
          className={formCss.formtitle}
          placeholder="Enter Receiver's UPI*"
        />
        <input
          onChange={handleChange}
          required
          name="priority"
          type="number"
          className={formCss.formtitle}
          placeholder="Priority*"
        />
        <input
          onChange={handleChange}
          required
          name="maxReg"
          type="number"
          className={formCss.formtitle}
          placeholder="Maximum Registration allowed*"
        />
        <select
          id="eventTeam"
          name="eventTeam"
          className={formCss.formtitle}
          onChange={handleDropDownChange}
          required
        >
          <option value="" hidden>
            Team Based Event*
          </option>
          <option value="true" className={formCss.formDropDownOption}>
            It needs team
          </option>
          <option value="false" className={formCss.formDropDownOption}>
            It doesn't need team
          </option>
        </select>
        {showTeamsize?<input
          onChange={handleChange}
          required
          name="teamSize"
          type="number"
          className={formCss.formtitle}
          placeholder="Maximum team size*"
        />:<></>}
        {fields}
        <div>
          <button className={formCss.saveBtn} onClick={handleAdd}>
            ADD FIELD
          </button>
          <button type="submit" className={formCss.saveBtn}>
            {isSaving ? <Load/>:"SAVE"}
          </button>
        </div>
      </form>
      </div>
      <Alert variant={variants} val={setError} />
    </>
  );
}
