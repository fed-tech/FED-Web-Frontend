import React, { useContext, useEffect, useState } from "react";

// css
import eventCss from "./cssp/EventDetails.module.css";
import axios from "axios";
import AuthContext from "../../store/auth-context";

// logo
// import logo from "../../Img/image26.png"
function EventDetails({ cardNo, setShow }) {
  const authCtx = useContext(AuthContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isToggleOn, setIsToggleOn] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

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

  const handleDeleteform = async () => {
    setAlertMessage("Form Deleted Successfully !");
    handleCloseModal();
  
    const id = cardNo._id;
    try {
      const response = await axios.delete(`/event/deleteevent/${id}`, {
        headers: {
          Authorization: authCtx.token,
        },
      });
      console.log(response);
      if (response.status === 200) {
        console.log("Form Deleted");
        setShow(false);
  
        //automatically hide the alert
        setTimeout(() => {
          setAlertMessage("");
        }, 2000);
      }
    } catch (err) {
      console.log(err);
    }
  };

  //overall functionality still remaining
  const handleViewform = async () => {
    setAlertMessage("Form Viewed Successfully !");
    setTimeout(() => {
      setAlertMessage("");
    }, 2000);
    handleCloseModal();
  };


  const handleToggle = () => {
    setIsToggleOn((prevState) => !prevState);
    setAlertMessage(isToggleOn ? "Form is Closed !" : "Form is Currently Active !");

    setTimeout(() => {
      setAlertMessage("");
    }, 2000);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);

    if (!isModalOpen) {
      document.body.style.overflow = 'auto';
      setIsModalOpen(true);
    } else {
      document.body.style.overflow = 'auto';

      setTimeout(() => {
        setIsModalOpen(false);
      }, 500);
    }
  };
  

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleFormClick = () => {
    toggleModal(); // Open or close the modal
  };

  useEffect(() => {
    console.log(cardNo);
  }, []);

  return (
    <div className={eventCss.fullPage}>
      <div className={eventCss.details}>
        <div className={eventCss.eventName}>
          <img src={cardNo.image} alt="" />
          {/* <img src={logo} alt="" /> */}
          <h1>{cardNo.title}</h1>
          {/* <h1>Stonkaholic</h1> */}
        </div>
        <div className={eventCss.eventDesc}>
          About the Event : {cardNo.description}
        </div>
        {/* <div className={eventCss.eventDesc}>
          About the Event : If you are immersed in the world of trading, you've unquestionably come across stocks and investments.This incredible competition allows all the participants to experience hands-on stock trading and hone their financial literacy. Trade with virtual money as you 
        </div> */}
        <div className={eventCss.moreDetails}>
          <div className={eventCss.date}>
            Event Date : {cardNo.date} {cardNo.month}
          </div>
          <div className={eventCss.regType}>
            Registration : {cardNo.registration}
          </div>
        </div>
        <div className={eventCss.forms}>

          <div className={eventCss.form} onClick={handleFormClick}>Test</div>
          <div className={eventCss.form} onClick={handleFormClick}>Form 1</div>
          <div className={eventCss.form} onClick={handleFormClick}>Form 1</div>
          <div className={eventCss.form} onClick={handleFormClick}>Form 1</div>
          <div className={eventCss.form} onClick={handleFormClick}>Form 1</div>
          <div className={eventCss.form} onClick={handleFormClick}>Form 1</div>
          <div className={eventCss.form} onClick={handleFormClick}>Form 1</div>
          <div className={eventCss.form} onClick={handleFormClick}>Form 1</div>
          <div className={eventCss.form} onClick={handleFormClick}>Form 1</div>
          <div className={eventCss.form} onClick={handleFormClick}>Form 1</div>
          <div className={eventCss.form} onClick={handleFormClick}>Form 1</div>
          <div className={eventCss.form} onClick={handleFormClick}>Form 1</div>
          <div className={eventCss.form} onClick={handleFormClick}>Form 1</div>
          <div className={eventCss.form} onClick={handleFormClick}>Form 1</div>
          <div className={eventCss.form} onClick={handleFormClick}>Form 1</div>
          <div className={eventCss.form} onClick={handleFormClick}>Form 1</div>
          <div className={eventCss.form} onClick={handleFormClick}>Form 1</div>
          <div className={eventCss.form} onClick={handleFormClick}>Form 1</div>
          <div className={eventCss.form} onClick={handleFormClick}>Form 1</div>
          <div className={eventCss.form} onClick={handleFormClick}>Form 1</div>

        </div>
        <div className={eventCss.btns}>
          <button className={eventCss.edit}>Edit</button>
          <button className={eventCss.delete} onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className={`${eventCss.modal} ${eventCss['slide-from-top']}`}>
          <span className={eventCss.close} onClick={handleCloseModal}>
            &times;
          </span>
          <h2>Form Title</h2>
          <p>Form Content</p>
          <button onClick={handleDeleteform}>Delete Form</button>
          <button onClick={handleViewform}>View Form</button>

          <label className={eventCss.switch}>
            <input
              input type="checkbox"
              checked={isToggleOn}
              onChange={handleToggle}
            />
            <span className={eventCss.slider}></span>
          </label>
        </div>
      )}

      {alertMessage && (
        <div className={eventCss.alert}>
          {alertMessage}
        </div>
      )}

    </div>
  );
}

export default EventDetails;
