import React, { useContext, useEffect, useState } from "react";

// css
import eventCss from "./cssp/EventDetails.module.css";
import axios from "axios";
import AuthContext from "../../store/auth-context";
import Load from "../../MicroInterAction/Load";
import { Alert } from "../../MicroInterAction/Alert";
// logo
// import logo from "../../Img/image26.png"
function EventDetails({ cardNo, setShow }) {
  const authCtx = useContext(AuthContext);
  const [loading,setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [forms,setForms] = useState([])
  const [currentForm,setCurrentForm] = useState({})
  const [isToggleOn, setIsToggleOn] = useState(currentForm.active);
  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });
  //creating instance
  let api = axios.create({
    headers: {
      Authorization: authCtx.token,
    }
  })
  api.interceptors.response.use((response) => response, (error) => {
    // whatever you want to do with the error
    if(error.response.status >= 500){
      setError({
        mainColor: "#FFC0CB",
        secondaryColor: "#FF69B4",
        symbol: "pets",
        title: "Server Error",
        text: "Internal Server Error",
        val: true,
      });
    }
    else if(error.response.status >= 400){
      setError({
        mainColor: "#FFC0CB",
        secondaryColor: "#FF69B4",
        symbol: "pets",
        title: "Server Error",
        text: "You Dont Have Access",
        val: true,
      });
    }
    throw error
  });


  const handleDelete = async () => {
    const id = cardNo._id;
    try {
      const response = await api.delete(`/event/deleteevent/${id}`);
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
    const id = currentForm._id;
    try {
      const response = await api.delete(`/form/deleteForm?formid=${id}`);
      console.log(response);
      if (response.status === 200) {
        setAlertMessage("Form Deleted Successfully !");
        handleCloseModal();
        makeRequest()
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


  const handleToggle = async () => {
    await api.get(`/form/toggleform?formid=${currentForm._id}`)
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

  const handleFormClick = (form) => {
    setCurrentForm(form);
    setIsToggleOn(form.active)
    toggleModal(); // Open or close the modal
  };

  const makeRequest= async()=>{
    try {
      setForms([])
      var eventid = cardNo._id
      setLoading(true)
      const res = await api.get(
        `/form/getForm?eventid=${eventid}`,        
        {
          headers: {
            Authorization: authCtx.token,
          },
        }
      );
      if (res.status == 200) {
        setForms(res.data)
      }
      setLoading(false)
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(()=>{
    console.log(forms)
  },[forms])
  useEffect(() => {
    console.log(cardNo);
    makeRequest()
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setError({
        mainColor: "",
        secondaryColor: "",
        symbol: "",
        title: "",
        text: "",
        val: false,
      });
    }, 10000);
  }, [variants]);

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
          {loading ? <Load></Load> : <></>}
          {forms.length == 0 && !loading? (
            <>
              <h1>No Forms Created</h1>
            </>
          ) : (
            <>
              {forms.map((form) => {
                return (
                  <div
                    className={eventCss.form}
                    onClick={() => {
                      handleFormClick(form);
                    }}
                  >
                    {form.title}
                  </div>
                );
              })}
            </>
          )}
        </div>
        <div className={eventCss.btns}>
          <button className={eventCss.edit}>Edit</button>
          <button className={eventCss.delete} onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className={`${eventCss.modal} ${eventCss["slide-from-top"]}`}>
          <span className={eventCss.close} onClick={handleCloseModal}>
            &times;
          </span>
          <div for="form details">
            <div>
              <span>Title:</span>
              <label>{currentForm.title}</label>
            </div>
            <div>
              <span>Description:</span>
              <label>{currentForm.description}</label>
            </div>
            <div>
              <span>Amount:</span>
              <label>{currentForm.amount}</label>
            </div>
            <div>
              <span>Priority:</span>
              <label>{currentForm.priority}</label>
            </div>
            <div>
              <span>Max Registrations:</span>
              <label>{currentForm.maxReg}</label>
            </div>
          </div>
          <button onClick={handleDeleteform}>Delete Form</button>
          <button onClick={handleViewform}>View Form</button>

          <label className={eventCss.switch}>
            <input
              input
              type="checkbox"
              checked={isToggleOn}
              onChange={handleToggle}
            />
            <span className={eventCss.slider}></span>
          </label>
        </div>
      )}
      <Alert variant={variants} val={setError} />
      {alertMessage && <div className={eventCss.alert}>{alertMessage}</div>}
    </div>
  );
}

export default EventDetails;
