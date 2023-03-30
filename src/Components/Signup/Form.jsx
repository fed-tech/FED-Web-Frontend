import React, { useState, useEffect } from "react";

// css
import "./Css/From.css";

export default function Form() {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstname) {
      errors.firstname = "This field is required!";
    }
    if (!values.lastname) {
      errors.lastname = "This field is required!";
    }
    if (!values.email) {
      errors.email = "email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "password is required!";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 character!";
    } else if (values.password.length > 10) {
      errors.password = "Password can not exceed more than 10 characters!";
    }
    return errors;
  };
  return (
    <>
  <div className="whiteDiv">
    
  </div>
    </>
  );
}
