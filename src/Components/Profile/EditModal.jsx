import React, { useContext, useState } from "react";
import AuthContext from "../../store/auth-context";
import axios from "axios";
import EditModalCss from './cssp/EditModal.module.css'

function EditModal({ setEditModal, cardNo, setCardNo }) {
    const authCtx = useContext(AuthContext)
    const [data, setData] = useState({
        _id: cardNo._id,
        title: cardNo.title ,
        image: cardNo.image,
        desc: cardNo.description,
        date: cardNo.date,
        month: cardNo.month,
        registration:cardNo.registration
      });
      let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
      const DataInp = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if (value === "") {
          e.target.style.borderBottom = "2px solid  #FF0000";
          e.target.style.outline = "none";
        } else {
          e.target.style.borderBottom = "2px solid  black";
        }
        setData({ ...data, [name]: value });
        console.log(data);
      };

      const handleedit = async (e)=>{
        e.preventDefault();

        const {title,image,desc,date,month,registration} = data;

        if(title!="" && image!="" && desc!="" && date!="" && month!="" && registration!="")
        {
            const obj = {title,image,description:desc,date,month,registration}
            const response = await axios.patch(`/event/editevent/${cardNo._id}`,obj,{
                headers: {
                    'Authorization':authCtx.token,
                    
                }
            })
            console.log(response);
            if(response.status === 200)
            {
                setCardNo(response.data.event);
                setEditModal(false);

            }
        }

      }

  return (
    <div className={EditModalCss.editModalOverlay}>
      <div className={EditModalCss.editModal}>
        <h2>Edit Event</h2>
        <form className={EditModalCss.edit_form}>
          <input
            type="text"
            id="title"
            name="title"
            value={data.title}
            placeholder="Title"
            onChange={DataInp}
          />
          <input
            type="text"
            id="image"
            name="image"
            value={data.image}
            placeholder="Image"
            onChange={DataInp}
          />
          <input
            type="text"
            id="desc"
            name="desc"
            value={data.desc}
            placeholder="Description"
            onChange={DataInp}
          />
          
          <select value={data.date} onChange={DataInp} name="date" className={EditModalCss.selectField}>
            <option hidden>Select a date</option>
            {Array.from({ length: 31 }, (_, index) => (
              <option key={index + 1} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
          <select value={data.month} onChange={DataInp} name="month" className={EditModalCss.selectField}>
            <option hidden>Select a month</option>
            {months.map((month) => (
              <option value={month}>
                {month}
              </option>
            ))}
          </select>
          <select
            value={data.registration}
            onChange={DataInp}
             className={EditModalCss.selectField}
            placeholder="Registration"
            id="year"
            name="registration"
          >
            <option hidden>Select registration type</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
          </select>
          <button type="submit" className={EditModalCss.btn} onClick={handleedit}>
            Edit Event
          </button>
          <button
            type="button"
            className={EditModalCss.btn}
            onClick={() => setEditModal(false)}
          >
            Close
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditModal;
