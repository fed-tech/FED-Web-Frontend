import React, { useState, useEffect } from "react";

// axios
import axios from "axios";

// Css
import "./css/LetsTalkBusiness.css";

export default function LetsTalkBusiness() {
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    console.table(formData);
  }, [formData]);

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const sumbitFunction = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (name !== "" && email !== "" && message !== "") {
      try {
        let data = {
          name,
          email,
          message,
        };

        const response = await axios.post(`/contact/postcontact`, {
          data,
        });

        if (response.ok) {
          setFormData({
            name: "",
            email: "",
            message: "",
          });

          setError(null);
        } else {
          setError("An Unexpected Error Occured");
        }

        console.log(response);
      } catch (error) {
        console.log(error);
        setError("An Unexpected Error Occured");
      }
    } else {
      setError("Please Fill All The Details");
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
            <input type="text" name="Name" required onChange={onChange} />
          </div>
          <div>
            <label for="Email">Email:</label>
            <input type="email" name="Email" required onChange={onChange} />
          </div>
          <div>
            <label for="Message" id="message">
              Message:
            </label>
            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              onChange={onChange}
            ></textarea>
          </div>
          <button type="submit" name="submit" onClick={sumbitFunction}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
