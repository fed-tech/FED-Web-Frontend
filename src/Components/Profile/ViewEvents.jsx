import React, { useContext, useEffect, useState } from 'react'
import EventCards from './EventCards'
import './cssp/ViewEvents.css'
import AuthContext from '../../store/auth-context';
import axios from 'axios';

function ViewEvents() {
  const [events,setEvents] = useState([]);
  const loadEvents = async()=>{
    const response = await axios.get("http://localhost:5000/event/getevent");
    if(response.status === 202){
      setEvents(response.data.event);
    }else{
      console.log("Did not recieve events");
    }
  }
  useEffect(() => {
    loadEvents();
  }, []);
  return (
    <div className='viewevents'>
        {events.map((i,idx)=>(
          <EventCards key={idx} info = {i}/>
        ))}
    </div>
  )
}

export default ViewEvents
