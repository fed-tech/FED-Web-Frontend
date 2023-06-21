import React, { useState } from "react";
import "./css/LetsTalkBusiness.css";

export default function LetsTalkBusiness() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const sumbitFunction = async (e) => {
    e.preventDefault();
    // console.log("first")
    const contactUs = { name, email, message };
    console.log(contactUs);
    const response = await fetch("http://localhost:5000/contact/postcontact", {
      method: "POST",
      body: JSON.stringify(contactUs),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      setName("");
      setEmail("");
      setMessage("");
      setError(null);
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
      </div>
      <div class="letsTalkBusiness-right">
        <form>
          <div>
            <label for="Name">Name:</label>
            <input
              type="text"
              name="Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div>
            <label for="Email">Email:</label>
            <input
              type="email"
              name="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div>
            <label for="Message" id="message">
              Message:
            </label>
            <textarea
              name="Message"
              cols="30"
              rows="10"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            ></textarea>
          </div>
          <button name="submit" onClick={sumbitFunction}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
