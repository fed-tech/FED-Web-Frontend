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

  const [error, setError] = useState(false);

  // const [error, setError] = useState({
  //   mainColor: "",
  //   secondaryColor: "",
  //   symbol: "",
  //   title: "",
  //   text: "",
  //   val: true,
  // });

  const variants = {
    mainColor: "#FDEDED",
    secondaryColor: "#F16360",
    symbol: "error",
    title: "Error",
    text: "The action was not carried out succesfully please try again.",
  };

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

          setError(null);
        } else {
          setLoad(false);
          setError("An Unexpected Error Occured");
        }
      } catch (error) {
        setLoad(false);
        setError("An Unexpected Error Occured");
      }
    } else {
      setLoad(false);
      setError("Please Fill All The Details");
    }
  };

  return (
    <div class="letsTalkBusiness" id="ContactUs">
      <Alert variant={variants} />

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

        {/* <div>
          {error ? (
            <p>
              <Alert variant={variants} />
            </p>
          ) : (
            <p>
              <Alert variant={variants} />
            </p>
          )}
        </div> */}
      </div>
    </div>
  );
}
