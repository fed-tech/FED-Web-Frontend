import React, { useRef, useEffect, useState, useContext } from "react";
import DOMPurify from "dompurify";
// Components
import AddField from "./AddField";

// css
import formCss from "../../../css/Profile/Dashboard/EventForm/EventForm.module.css";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import AuthContext from "../../../../store/auth-context";
import Load from "../../../../MicroInterAction/Load";

import RegForm from "../../../Events/card/regForm";

import DatePicker from "react-datepicker";

export default function Form({ setError }) {
  const [showFields, setShowFields] = useState({ fields: [{}] });
  const [hideAmount, sethideAmount] = useState(true);
  const [eventpreview, seteventPreview] = useState(false);
  const [eventList, setEventList] = useState([]);
  const [showTeamsize, setShowTeamsize] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showMail, setShowMail] = useState(false);
  const authCtx = useContext(AuthContext);

  const handleSave = async (e) => {
    if(window.event.submitter.name == "preview"){
      setShowFields({
        ...showFields,
        formelement: showFields.fields.map((e) => {
          var temp = {};
          temp.name = e.name;
          temp.type = e.type;
          temp.placeholder = e.value != null ? e.value : "Enter your " + e.name;
          temp.required = true;
          temp.value = e.value;
          return temp;
        }),
      });
      e.preventDefault()
      return seteventPreview(true);
    }
    setIsSaving(true);
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
          description: formDetails.formDesc,
          amount: formDetails.amount,
          priority: formDetails.priority,
          formelement: formDetails.fields,
          event: formDetails.eventName,
          isTeam: showTeamsize,
          teamsize: formDetails.teamSize,
          maxReg: formDetails.maxReg,
          upi: formDetails.upi,
          img: formDetails.formimg,
          date: formDetails.date,
          mail: formDetails.formMail,
        },
        {
          headers: {
            Authorization: authCtx.token,
          },
        }
      );
      if (res.status == 200) {
        setShowFields({ fields: [{}] });
        e.target.reset();
        window.scrollTo(0, 0);
      }
    } catch (err) {
    } finally {
      setIsSaving(false);
    }
  };

  const handleChange = (e) => {
    if (e.target.type == "number" && e.target.value < 0) {
      e.target.value = 0;
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
  useEffect(() => {
  }, [showTeamsize]);

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
  //   }, [eventList]);


  const handlemailpreview = () => {
    setShowMail(true);
  };

  return (
    <>
      {/* <button onClick={getEvent()}>blah</button> */}

      <div className={formCss.head}>
        <h1>NEW FORM</h1>
      </div>
      <div
        className={formCss.formDiv}
        style={{ overflow: "auto", height: "100vh", paddingRight: "10px" }}
      >
        <form
          action=""
          onSubmit={handleSave}
          onInvalid={handleFormError}
          id="form"
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
            name="formDesc"
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
            // required={!hideAmount}
          />
          <input
            id="upi"
            onChange={handleChange}
            hidden={hideAmount}
            name="upi"
            type="text"
            className={formCss.formtitle}
            placeholder="Enter Receiver's UPI*"
            // required={!hideAmount}
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
          {showTeamsize ? (
            <input
              onChange={handleChange}
              required
              name="teamSize"
              type="number"
              className={formCss.formtitle}
              placeholder="Maximum team size*"
            />
          ) : (
            <></>
          )}
          <div className={formCss.previewmailcont}>
            <button
              className={formCss.previewmailBtn}
              type="button"
              onClick={handlemailpreview}
            >
              PREVIEW
            </button>
            <textarea
              onChange={handleChange}
              name="formMail"
              className={formCss.formtitle}
              placeholder="Successful Registration Mail"
              required
            />
          </div>
          {fields}
        </form>
      </div>
      <div className="saveButtons">
        <button className={formCss.saveBtn} onClick={handleAdd}>
          ADD FIELD
        </button>
        <button className={formCss.saveBtn} form="form" name="preview" type="submit">
          PREVIEW
        </button>
        <button form="form" type="submit" name="save" className={formCss.saveBtn}>
          {isSaving ? <Load /> : "SAVE"}
        </button>
      </div>
      {showMail && (
        <div className={formCss.modal}>
          <span
            className={formCss.close}
            onClick={() => {
              setShowMail(false);
            }}
          >
            &times;
          </span>
          <br></br>
          <br></br>
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(showFields.formMail),
            }}
          ></div>
        </div>
      )}
      {eventpreview && (
        <RegForm
          showPopUp={eventpreview}
          setShowPopUp={seteventPreview}
          setError={setError}
          formid={showFields.formTitle}
          formelement={showFields}
          formName={showFields.formTitle}
        />
      )}
    </>
  );
}
