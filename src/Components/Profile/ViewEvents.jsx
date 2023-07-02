import React, { useEffect, useState } from 'react'
import EventCards from './EventCards'
import './cssp/ViewEvents.css'
import axios from 'axios';
import EventDetails from './EventDetails';

function ViewEvents({ showEvent, setShow, setCardNo, cardNo }) {
  const [events, setEvents] = useState([]);
  const loadEvents = async () => {
    const response = await axios.get("http://localhost:5000/event/getevent");
    if (response.status === 202) {
      setEvents(response.data.event);
    } else {
      console.log("Did not recieve events");
    }
  }
  useEffect(() => {
    loadEvents();
  }, [showEvent]);
  return (
    <div className='viewEventss'>
        {showEvent?
          <EventDetails cardNo = {cardNo} setShow = {setShow}/>
        :
        <div className="viewevents">
          {events.map((i,idx)=>(
            <EventCards key={idx} info = {i} setShow = {setShow} setCardNo = {setCardNo} cardNo = {cardNo}/>
          ))}
        </div>}
    </div>
  )
}

export default ViewEvents
