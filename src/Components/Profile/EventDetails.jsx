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
  const [loading,setLoading] = useState(true);
  const [deleting,setDeleting] = useState(false);
  const [editing,setEditing] = useState(false);
  const [deletingform,setDeletingForm] = useState(false);
  const [viewingform,setViewingForm] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

        setDeleting(true);

        setError({
          mainColor: "pink",
          secondaryColor: "orange",
          symbol: "check",
          title: "Success",
          text: "Event deleted successfully!",
          val: true,
        });
        
  
          console.log("Event deleted");
          setShow(false);
          window.scrollTo(0, 0);
        
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = async () => {

    setEditing(true);
    setTimeout(() => {
      setEditing(false);
    }, 1000);
  };

  const handleDeleteform = async () => {  
    const id = currentForm._id;
    try {
      const response = await api.delete(`/form/deleteForm?formid=${id}`);
      console.log(response);
      if (response.status === 200) {

        setDeletingForm(true);
        setTimeout(() => {
          setDeletingForm(false);
        }, 500);

        setError({
          mainColor: "pink",
          secondaryColor: "orange",
          symbol: "check",
          title: "Success",
          text: "Form deleted successfully!",
          val: true,
        });
        
          console.log("Form deleted");
          handleCloseModal();
          makeRequest()
          window.scrollTo(0, 0);
      }
    } catch (err) {
      console.log(err);
    }
  };

  //overall functionality still remaining
  const handleViewform = async () => {

    setViewingForm(true);
    setTimeout(() => {
      setViewingForm(false);
    }, 500);

    setError({
      mainColor: "pink",
      secondaryColor: "orange",
      symbol: "check",
      title: "Success",
      text: "Form Viewed successfully!",
      val: true,
    });
      console.log("Form viewed");
      handleCloseModal();
      window.scrollTo(0, 0);
  };

  

  const handleToggle = async () => {
    await api.get(`/form/toggleform?formid=${currentForm._id}`)
    setIsToggleOn((prevState) => !prevState);
    setError({
      mainColor: "pink",
      secondaryColor: "orange",
      symbol: "check",
      title: "Success",
      text: isToggleOn ? "Form is Closed !" : "Form is Currently Active !",
      val: true,
    });
    toggleModal()
    makeRequest()
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
          {forms.length == 0 && !loading ? (
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
          <button className={eventCss.edit} onClick={handleEdit}>
            {editing ? <Load /> : "Edit"}
          </button>
          <button className={eventCss.delete} onClick={handleDelete}>
            {deleting ? <Load /> : "Delete"}
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className={`${eventCss.modal} ${eventCss["slide-from-top"]}`}>
          <span className={eventCss.close} onClick={handleCloseModal}>
            &times;
          </span>
          <div for="form details">
            {Object.keys(currentForm).map((elem,idx) => {
                return (
                  <div key={idx}>
                    <span>{[elem]}:</span>
                    <label>{JSON.stringify(currentForm[elem])}</label>
                  </div>
                );
            })}
          </div>
          <div className={eventCss.modbtns}>
            <button onClick={handleDeleteform}>
              {deletingform ? <Load /> : "Delete"}
            </button>
            <button onClick={handleViewform}>
              {viewingform ? <Load /> : "View Form"}
            </button>
    
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
        </div>
      )}
      <Alert variant={variants} val={setError} />
    </div>
  );
}

export default EventDetails;
