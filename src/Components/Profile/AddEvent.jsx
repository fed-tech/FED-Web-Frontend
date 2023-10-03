import React, { useContext, useState } from 'react';
import addEventCss from "./cssp/AddEvent.css";
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AuthContext from '../../store/auth-context';
import ImageModal from './ImageModal';

function AddEvent({setViewEvents}) {
  const [form,setForm] = useState({
    title:"",
    about:"",
    poster:"",
    date: new Date(),
    month:"",
    reg_type:""
  });

  const [previewImage, setPreviewImage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const authCtx = useContext(AuthContext);

  const dataInp = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setForm({...form, [name]: value})
  }

  console.log(form)
  const handleSubmit = async (e)=>{
    e.preventDefault();
    const obj = {
      title: form.title,
      description: form.about,
      image: form.poster,
      date: form.date,
      month: form.month,
      registration: form.reg_type
    }
    const response = await axios.post('/event/addevent',obj,{
      headers: {
          'Authorization': authCtx.token
      }})
      console.log(response)
      if(response.status === 202)
      {
        console.log(response)
        console.log("Added event")
        setViewEvents(true);
      }
      else{
        console.log("Not added");
      }

  }

  const handlePreview = () => {
    console.log("check handle");
    setPreviewImage(form.poster);
    setIsModalOpen(true);
  }
  const handleDateChange = (date) => {
    setForm(prevState => ({ ...prevState, date: date }));
  }
  const handleRegTypeChange = (e) => {
    setForm(prevState => ({ ...prevState, reg_type: e.target.value }));
  }
  // const handleChangeMonth=(month)=>setForm((prevState)=>( {...prevState , month}))
  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <div className='addevent'>
        <form action="">
            <input type="text" placeholder='Event Title' name='title' onChange={dataInp}/>
            <input type="textarea" placeholder='About the Event'   name='about' onChange={dataInp}/>
            {/* <textarea placeholder='About the Event'  name='about' onChange={dataInp}/> */}
            {/* <div className='about_event'>
              {form.about}
            </div> */}
            <div className='event_poster'>
              <input type="text" placeholder='Poster Link' name='poster' onChange={dataInp}/>
              {/*<a href={form.poster} target='blank' className='preview_btn'>Preview</a>*/}
              <button type="button" className='preview_btn' onClick={handlePreview}>Preview</button>
            </div>
            <div className={addEventCss.addEvent}> 
                <DatePicker
                selected={form.date} 
                onChange={handleDateChange} 
                dateFormat="dd/MM/yyyy"
                placeholderText="dd/mm/yyyy"
               />
            <select placeholder='Registration type' name='reg_type' onChange={handleRegTypeChange}
            className='regdropdown'>
              <option value="">Select Registration Type</option>
              <option value="upcoming">Upcoming</option>
              <option value="closed">Closed</option>
              <option value="now">Now</option>
            </select>
          </div>
            <div className='inp_btn'>
              <input type="submit" value="Submit" className='submit_btn' onClick={handleSubmit}/>
            </div>
        </form>
        {isModalOpen && (
        <ImageModal imageUrl={previewImage} onClose={closeModal} />
      )}
    </div>
  )
}

export default AddEvent
