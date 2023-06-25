import React, { useContext, useState } from "react";

// axios
import axios from "axios";

// css
import "./css/AddEvent.css";

// state
import AuthContext from "../../store/auth-context";

function AddEvent() {
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
  const handleSubmit = () => {
    const fDate = form.date + "." + form.month;
    const obj = {
      title: form.title,
      description: form.about,
      image: form.poster,
      date: form.date,
      month: form.month,
      registration: form.reg_type,
    };
    axios
      .post("http://localhost:5000/event/addevent", obj, {
        headers: {
          Authorization: authCtx.token,
        },
      })
      .then((res) => {
        if (res.status === 201) {
          console.log("Added event");
        } else {
          console.log("Not added");
        }
      });
  };
  return (
    <div className="addevent">
      <form action="" onSubmit={handleSubmit}>
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
        <input
          type="text"
          placeholder="Poster Link"
          name="poster"
          onChange={dataInp}
        />
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
        <input type="submit" value="Submit" className="addevent_submit_btn" />
      </form>
    </div>
  );
}

export default AddEvent;
