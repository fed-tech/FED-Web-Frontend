import React, { useEffect, useState } from 'react'
import EventCards from '../../EventCards'
import '../../../css/Profile/Dashboard/EventAdmin/ViewEvents.css'
import axios from 'axios';
import EventDetails from '../../EventDetails';

function ViewEvents({ showEvent, setShow, setCardNo, cardNo }) {
  const [events, setEvents] = useState([]);
  const loadEvents = async () => {
    const response = await axios.get("/event/getevent");
    if (response.status === 200) {
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
        <div className="viewEventDets">
          <EventDetails cardNo = {cardNo} setShow = {setShow}/>
        </div>
        :
        <div className="viewevents">
          {events.length==0?<><div style={{marginLeft:"20%"}}><h2>No Events Found</h2></div></>:events.map((i,idx)=>(
            <EventCards key={idx} info = {i} setShow = {setShow} setCardNo = {setCardNo} cardNo = {cardNo}/>
          ))}
        </div>}
    </div>
  )
}

export default ViewEvents
