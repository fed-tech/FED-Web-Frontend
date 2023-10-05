import React, { useContext, useState } from 'react';
import './cssp/AddEvent.css';
import axios from 'axios';
import AuthContext from '../../store/auth-context';
import Load from "../../MicroInterAction/Load";
import { Alert } from "../../MicroInterAction/Alert";
import ImageModal from './ImageModal';

function AddEvent({setViewEvents}) {
  const [form,setForm] = useState({
    title:"",
    about:"",
    poster:"",
    date:"",
    month:"",
    reg_type:""
  });
  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });

  const [previewImage, setPreviewImage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const authCtx = useContext(AuthContext);

  const [submitting,setSubmitting] = useState(false);

  const dataInp = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setForm({...form, [name]: value})
  }

  const handleSubmit = async (e)=>{

    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await axios.post(
        "/events/addEvent",
        {
        title: form.title,
        description: form.about,
        image: form.poster,
        date: form.date,
        month: form.month,
        registration: form.reg_type
        },
        {
        headers: {
          Authorization: authCtx.token,
          }
        }
      )
      console.log("Response status 1:", err.response.status);

      if(response.status === 202){
        console.log(form);
        console.log("Added event");
        console.log("Response status 2:", err.response.status);

        setError({
          mainColor: "pink",
          secondaryColor: "orange",
          symbol: "check",
          title: "Success",
          text: "Event submitted successfully!",
          val: true,
        });
        
        // Set a delay before resetting to the initial state and hiding the success message
        setTimeout(() => {
          setError({
            mainColor: "",
            secondaryColor: "",
            symbol: "",
            title: "",
            text: "",
            val: false,
          });

          setSubmitting(false);
          setViewEvents(true);
          window.scrollTo(0, 0);
        }, 2000);
      }

    } catch (err) {
      console.log(form);
      console.log("Response status 3:"); // Log the response status
      setError({
        mainColor: "lightpink",
        secondaryColor: "red",
        symbol: "Error",
        title: "Check it out",
        text: "Please fill all the details!",
        val: true,
      });
        
        // Set a delay before resetting to the initial state and hiding the success message
        setTimeout(() => {
          setError({
            mainColor: "",
            secondaryColor: "",
            symbol: "",
            title: "",
            text: "",
            val: false,
          });   
        }, 2000);

        setTimeout(() => {  
            setSubmitting(false);
        }, 300);

      }
  }

  const handlePreview = () => {
    console.log("check handle");
    setPreviewImage(form.poster);
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <div className='addevent'>
        <form action="">
            <input type="text" placeholder='Event Title' name='title' onChange={dataInp}/>
            <input type="text" placeholder='About the Event' name='about' onChange={dataInp}/>
            <div className='event_poster'>
              <input type="text" placeholder='Poster Link' name='poster' onChange={dataInp}/>
              {/*<a href={form.poster} target='blank' className='preview_btn'>Preview</a>*/}
              <button type="button" className='preview_btn' onClick={handlePreview}>Preview</button>
            </div>
            
            <div className='addevent_date'>
              <input type="text" placeholder='Event Date' name='date' onChange={dataInp}/>
              <input type="text" placeholder='Event Month' name='month' onChange={dataInp}/>
            </div>
            <input type="text" placeholder='Registration Type' name='reg_type' onChange={dataInp}/>
            <div className='inp_btn'>
              <button type="submit" value="Submit" className='submit_btn' onClick={handleSubmit}>
                {submitting ? <Load /> : "SUBMIT"}
              </button>
            </div>
        </form>
        <Alert variant={variants} val={setError} />
        {isModalOpen && (
        <ImageModal imageUrl={previewImage} onClose={closeModal} />
      )}
    </div>
  )
}

export default AddEvent
