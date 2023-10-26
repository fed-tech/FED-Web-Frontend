import React, { useContext, useState } from "react";

import "../../../css/Profile/Dashboard/EventAdmin/AddEvent.css";

// axios
import axios from "axios";
import AuthContext from "../../../../store/auth-context";
import Load from "../../../../MicroInterAction/Load";
import { Alert } from "../../../../MicroInterAction/Alert";
import ImageModal from "../../ImageModal";
import validator from "validator";

function AddEvent({ setViewEvents }) {
  const authCtx = useContext(AuthContext);
  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });

  const [previewImage, setPreviewImage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    title: "",
    about: "",
    poster: "",
    date: new Date(),
    reg_type: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const dataInp = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      form.title === "" ||
      form.about === "" ||
      form.poster === "" ||
      form.reg_type === ""
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
    }
    if (!validator.isURL(form.poster)) {
      setError({
        mainColor: "#FFF4E5",
        secondaryColor: "#FFA117",
        symbol: "warning",
        title: "Warning",
        text: "Invalid Image Link",
        val: true,
      });
      return;
    }
    const obj = {
      title: form.title,
      description: form.about,
      image: form.poster,
      date: form.date,
      registration: form.reg_type,
    };
    const response = await axios.post("/event/addevent", obj, {
      headers: {
        Authorization: authCtx.token,
      },
    });
    console.log(response);
    if (response.status === 202) {
      console.log(response);
      console.log("Added event");
      setViewEvents(true);
    } else {
      console.log("Not added");
    }
    setSubmitting(true);

    try {
      const response = await axios.post(
        "/events/addEvent",
        {
          title: form.title,
          description: form.about,
          image: form.poster,
          date: form.date,
          month: form.month,
          registration: form.reg_type,
        },
        {
          headers: {
            Authorization: authCtx.token,
          },
        }
      );
      console.log("Response status 1:", err.response.status);

      if (response.status === 202) {
        console.log(form);
        console.log("Added event");
        console.log("Response status 2:", err.response.status);

        setError({
          mainColor: "pink",
          secondaryColor: "orange",
          symbol: "check",
          title: "Success",
          text: "Event submitted successfully!",
          val: true,
        });
        // Set a delay before resetting to the initial state and hiding the success message
        window.scrollTo(0, 0);
      }
    } catch (err) {
      console.log(form);
      console.log("Response status 3:"); // Log the response status
      setError({
        mainColor: "lightpink",
        secondaryColor: "red",
        symbol: "Error",
        title: "Check it out",
        text: "Please fill all the details!",
        val: true,
      });
    }
  };

  const handlePreview = () => {
    console.log("check handle");
    setPreviewImage(form.poster);
    setIsModalOpen(true);
  };

  const handleRegTypeChange = (e) => {
    setForm((prevState) => ({ ...prevState, reg_type: e.target.value }));
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="addEvent">
      <form action="">
        <input
          type="text"
          placeholder="Event Title"
          name="title"
          onChange={dataInp}
        />
        <input
          type="textarea"
          placeholder="About the Event"
          name="about"
          onChange={dataInp}
        />
        {/* <textarea placeholder='About the Event'  name='about' onChange={dataInp}/> */}
        {/* <div className='about_event'>
              {form.about}
            </div> */}
        <div className="event_poster">
          <input
            type="text"
            placeholder="Poster Link"
            name="poster"
            onChange={dataInp}
          />
          {/*<a href={form.poster} target='blank' className='preview_btn'>Preview</a>*/}
          <button type="button" className="preview_btn" onClick={handlePreview}>
            Preview
          </button>
        </div>
        <div className="addEvent">
          <select
            placeholder="Registration type"
            name="reg_type"
            onChange={handleRegTypeChange}
            className="regdropdown"
          >
            <option value="">Select Registration Type</option>
            <option value="upcoming">Upcoming</option>
            <option value="closed">Closed</option>
            <option value="now">Now</option>
          </select>
        </div>
        <div className="inp_btn">
          <button
            type="submit"
            value="Submit"
            className="submit_btn"
            onClick={handleSubmit}
          >
            {submitting ? <Load /> : "SUBMIT"}
          </button>
        </div>
      </form>
      {isModalOpen && (
        <ImageModal imageUrl={previewImage} onClose={closeModal} />
      )}
      <Alert variant={variants} val={setError} />
    </div>
  );
}

export default AddEvent;
