import React, { useEffect, useState } from 'react'
import EventCards from './EventCards'
import './cssp/ViewEvents.css'
import axios from 'axios';
import EventDetails from './EventDetails';

function ViewEvents({showEvent,setShow}) {
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
        {showEvent?<EventDetails/>:events.map((i,idx)=>(
          <EventCards key={idx} info = {i} setShow = {setShow}/>
        ))}
    </div>
  )
}

export default ViewEvents
