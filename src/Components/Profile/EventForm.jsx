import React, { useContext, useState } from "react";

// css
import formCss from "../Profile/cssp/EventForm.module.css";
import axios from "axios";
import AuthContext from "../../store/auth-context";

export default function Form() {
  const authCtx = useContext(AuthContext);

  const [form, setForm] = useState({
    title: "",
    description: "",
    event: "",
    amount: "",
    priority: "",
  });
  const [formData, setFormData] = useState({
    field_name: "",
    fill_type: "",
    field_type: "",
  });
  const DataInp = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleFormdata = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    let data = [];
    const { title, description, event, amount, priority } = form;
    data.push(formData);
    if (
      title != "" &&
      description != "" &&
      event != "" &&
      amount != "" &&
      priority
    ) {
      const obj = {
        title,
        description,
        event,
        amount,
        formdata: data,
        priority,
      };
      try{
        const response = await axios.post("/form/addForm", obj, {
            headers: {
              Authorization: authCtx.token,
            },
          });
          if (response.status === 200) {
            console.log("Form added");
          }
          else{
            console.log("Form not added")
          }

      }catch(err){
        console.log(err)
      }
    }
    else{
        console.log("Please fill all the fields")
    }
  };

  return (
    <>
      <div className={formCss.head}>
        <h1>NEW FORM</h1>
      </div>
      <div className={formCss.form}>
        <form action="" className={formCss.formDiv}>
          <input
            type="text"
            placeholder="Form Title*"
            name="title"
            onChange={DataInp}
          />
          <input
            type="text"
            placeholder="About Event*"
            name="description"
            onChange={DataInp}
          />
          <input
            type="text"
            placeholder="Event Type*"
            name="event"
            onChange={DataInp}
          />
          <input
            type="text"
            placeholder="Amount"
            name="amount"
            onChange={DataInp}
          />
          <input
            type="text"
            placeholder="Priority"
            name="priority"
            onChange={DataInp}
          />
          <div className={formCss.formBottom}>
            <input
              type="text"
              placeholder="Field Name*"
              name="field_name"
              onChange={handleFormdata}
            />
            <input
              type="text"
              placeholder="Fill Type*"
              name="fill_type"
              onChange={handleFormdata}
            />
            <input
              type="text"
              placeholder="Field Type*"
              name="field_type"
              onChange={handleFormdata}
            />
          </div>
          <div className={formCss.Btn}>
            <button className={formCss.saveBtn} onClick={handleSave}>
              SAVE
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
