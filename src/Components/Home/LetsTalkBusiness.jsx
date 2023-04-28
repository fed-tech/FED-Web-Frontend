import React, { useState } from "react";
import "./css/LetsTalkBusiness.css";

export default function LetsTalkBusiness() {
  const [formData, setFormData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const storedData = JSON.parse(localStorage.getItem("formData")) || [];
    const newKey = Date.now().toString();
    const newData = { ...storedData, [newKey]: formData };
    localStorage.setItem("formData", JSON.stringify(newData));

    const data = localStorage.getItem("formData");
    console.log("Stored data:", data);
    //localStorage.clear()
    setFormData({});
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <div class="letsTalkBusiness" id="ContactUs">
      <div class="letsTalkBusiness-left">
        <p class="business-heading">
          Let's Talk <span>Business</span>
        </p>
        <p class="business-text">
          We'd love to hear from you! Whether you are curious about how our
          society works, how you can participate in our webinars and events, any
          recent updates or anything that interest you - we're ready to answer
          any and all of your questions!
        </p>
      </div>
      <div class="letsTalkBusiness-right">
        <form>
          <div>
            <label for="Name">Name:</label>
            <input
              type="text"
              name="Name"
              id="Name"
              required=""
              onChange={handleChange}
            />
          </div>
          <div>
            <label for="Email">Email:</label>
            <input
              type="email"
              name="Email"
              id="Email"
              required=""
              onChange={handleChange}
            />
          </div>
          <div>
            <label for="Message">Message:</label>
            <textarea
              name="Message"
              id="message"
              cols="30"
              rows="10"
              required=""
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" name="submit" id="send" onClick={handleSubmit}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
