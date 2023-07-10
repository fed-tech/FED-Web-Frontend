import React, { useContext, useEffect, useState } from "react";

// css
import eventCss from "./cssp/EventDetails.module.css";
import axios from "axios";
import AuthContext from "../../store/auth-context";
import EditModal from "./EditModal";

// logo
// import logo from "../../Img/image26.png"
function EventDetails({ cardNo, setShow, setCardNo }) {
  const authCtx = useContext(AuthContext);

  const [editModal,setEditModal] = useState(false);

  const handleDelete = async () => {
    const id = cardNo._id;
    try {
      const response = await axios.delete(`/event/deleteevent/${id}`, {
        headers: {
          Authorization: authCtx.token,
        },
      });
      console.log(response);
      if (response.status === 200) {
        console.log("Event deleted");
        setShow(false);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    console.log(cardNo);
  }, []);
  return (
    <div className={eventCss.fullPage}>
      <div className={eventCss.detailsHead}>
          <div className={eventCss.eventName}>
            <img src={cardNo.image} alt="" />
            <h1>{cardNo.title}</h1>
          </div>
      </div>
      <div className={eventCss.scroll}>
        <div className={eventCss.details}>
          <div className={eventCss.eventDesc}>
            About the Event : {cardNo.description}
          </div>

          <div className={eventCss.moreDetails}>
            <div className={eventCss.date}>
              Event Date : {cardNo.date} {cardNo.month}
            </div>
            <div className={eventCss.regType}>
              Registration : {cardNo.registration}
            </div>
          </div>
          <div className={eventCss.forms}>
            <div className={eventCss.form}>Form 1</div>
            <div className={eventCss.form}>Form 1</div>
            <div className={eventCss.form}>Form 1</div>
            <div className={eventCss.form}>Form 1</div>
            <div className={eventCss.form}>Form 1</div>
            <div className={eventCss.form}>Form 1</div>
            <div className={eventCss.form}>Form 1</div>
            <div className={eventCss.form}>Form 1</div>
            <div className={eventCss.form}>Form 1</div>
            <div className={eventCss.form}>Form 1</div>
            <div className={eventCss.form}>Form 1</div>
            <div className={eventCss.form}>Form 1</div>
            <div className={eventCss.form}>Form 1</div>
            <div className={eventCss.form}>Form 1</div>
            <div className={eventCss.form}>Form 1</div>
            <div className={eventCss.form}>Form 1</div>
            <div className={eventCss.form}>Form 1</div>
            <div className={eventCss.form}>Form 1</div>
            <div className={eventCss.form}>Form 1</div>
            <div className={eventCss.form}>Form 1</div>
            <div className={eventCss.form}>Form 1</div>

          </div>
          <div className={eventCss.space}></div>
        </div>
      </div>
      <div className={eventCss.gradient}>
        <button className={eventCss.edit} onClick={()=> setEditModal(true)}>Edit</button>
        <button className={eventCss.delete} onClick={handleDelete}>
          Delete
        </button>
      </div>
      {editModal&&<EditModal setEditModal = {setEditModal} cardNo = {cardNo} setCardNo = {setCardNo}/>}
    </div>
  );
}

export default EventDetails;