import React, { useContext, useState } from "react";
import "./cssp/AddEvent.css";
import axios from "axios";
import AuthContext from "../../store/auth-context";

function AddEvent({ setViewEvents }) {
  const [form, setForm] = useState({
    title: "",
    about: "",
    poster: "",
    date:"",
    month:"",
    reg_type: "",
  });
  let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const authCtx = useContext(AuthContext);
  const dataInp = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };
  console.log(form);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const obj = {
      title: form.title,
      description: form.about,
      image: form.poster,
      date: form.date,
      month: form.month,
      registration: form.reg_type,
    };
    const response = await axios.post(
      "/event/addevent",
      obj,
      {
        headers: {
          'Authorization': authCtx.token,
        },
      }
    );
    console.log(response);
    if (response.status === 202) {
      console.log(response);
      console.log("Added event");
      setViewEvents(true);
    } else {
      console.log("Not added");
    }
  };
  return (
    <div className="addevent">
      <form action="">
        <input
          type="text"
          placeholder="Event Title"
          name="title"
          onChange={dataInp}
        />
        <input
          type="text"
          placeholder="About the Event"
          name="about"
          onChange={dataInp}
        />
        <div className="event_poster">
          <input
            type="text"
            placeholder="Poster Link"
            name="poster"
            onChange={dataInp}
          />
          <a href={form.poster} target="blank" className="preview_btn">
            Preview
          </a>
        </div>
        <div className="addevent_date">
          <select value={form.date} onChange={dataInp} name="date">
            <option hidden>Select a date</option>
            {Array.from({ length: 31 }, (_, index) => (
              <option key={index + 1} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
          <select value={form.month} onChange={dataInp} name="month">
            <option hidden>Select a month</option>
            {months.map((month) => (
              <option value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>
        <select name="reg_type" id = "reg_type" onChange={dataInp}>
          <option hidden>Select registration type</option>
          <option value="Online">Online</option>
          <option value="Offline">Offline</option>
        </select>
        <div className="inp_btn">
          <input
            type="submit"
            value="Submit"
            className="addevent_submit_btn"
            onClick={handleSubmit}
          />
        </div>
      </form>
    </div>
  );
}

export default AddEvent;
