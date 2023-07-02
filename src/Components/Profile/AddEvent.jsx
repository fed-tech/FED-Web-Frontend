import React, { useContext, useState } from "react";
import "./cssp/AddEvent.css";
import axios from "axios";
import AuthContext from "../../store/auth-context";

function AddEvent({ setViewEvents }) {
  const [form, setForm] = useState({
    title: "",
    about: "",
    poster: "",
    date: "",
    month: "",
    reg_type: "",
  });
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
      "http://localhost:5000/event/addevent",
      obj,
      {
        headers: {
          Authorization: authCtx.token,
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
          <input
            type="text"
            placeholder="Event Date"
            name="date"
            onChange={dataInp}
          />
          <input
            type="text"
            placeholder="Event Month"
            name="month"
            onChange={dataInp}
          />
        </div>
        <input
          type="text"
          placeholder="Registration Type"
          name="reg_type"
          onChange={dataInp}
        />
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
