import React, { useState, useEffect } from "react";

// Components
import Load from "./../../MicroInterAction/Load";
import { Alert } from "./../../MicroInterAction/Alert";

// axios
import axios from "axios";

// Css
import "./css/LetsTalkBusiness.css";

export default function LetsTalkBusiness() {
  const [loadingEffect, setLoad] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const sumbitFunction = async (e) => {
    e.preventDefault();
    setLoad(true);

    const { name, email, message } = formData;

    if (name !== "" && email !== "" && message !== "") {
      try {
        let data = {
          name,
          email,
          message,
        };

        const response = await axios.post(`/contact/postcontact`, data);

        if (response.data.status === true) {
          setLoad(false);

          setFormData({
            name: "",
            email: "",
            message: "",
          });

          setError({
            mainColor: "#EDFEEE",
            secondaryColor: "#5CB660",
            symbol: "check_circle",
            title: "Success",
            text: "We'll revert back to you soon!",
            val: true,
          });
        } else {
          setLoad(false);

          setError({
            mainColor: "#FDEDED",
            secondaryColor: "#F16360",
            symbol: "error",
            title: "Error",
            text: "An Unexpected Error Occured",
            val: true,
          });
        }
      } catch (error) {
        setLoad(false);

        setError({
          mainColor: "#FDEDED",
          secondaryColor: "#F16360",
          symbol: "error",
          title: "Error",
          text: "An Unexpected Error Occured",
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
        <br />
        <br />
        <div class="business-text">
          <p>For Any Other Query Post Us At: </p>
          <a class="business-text address" target="_blank" href="https://maps.app.goo.gl/jno8aJVBUBXHzS5o9">
            <p>Federation Of Entrepreneurship Development KIIT</p>
            <p>
              <span>
                Campus 11, KIIT Deemed to be University, Bhubaneswar, Odisha.,
                <br />
                751024
              </span>
              <br />
              <span>fedkiit@gmail.com</span>
            </p>
          </a>
        </div>
      </div>

      <div class="letsTalkBusiness-right">
        <form>
          <div>
            <label for="name">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              required
              onChange={onChange}
            />
          </div>
          <div>
            <label for="email">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              required
              onChange={onChange}
            />
          </div>
          <div>
            <label for="message" id="message">
              Message:
            </label>
            <textarea
              name="message"
              cols="30"
              rows="10"
              value={formData.message}
              required
              onChange={onChange}
            ></textarea>
          </div>
          <button type="submit" name="submit" onClick={sumbitFunction}>
            {loadingEffect ? <Load /> : "Send"}
          </button>
        </form>

        <Alert variant={variants} val={setError} />
      </div>
    </div>
  );
}
