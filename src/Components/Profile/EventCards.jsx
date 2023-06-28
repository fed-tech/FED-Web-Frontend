import React, { useEffect } from 'react'
import './cssp/EventCards.css'
import axios from 'axios'

function EventCards({info}) {
  return (
    <div className='eventcards'>
        <div className='event_img'>
            <img crossOrigin="anonymous" src={info.image} alt="" />
        </div>
        <div className='event_content'>
            <h2>{info.title}</h2>
            <div className="date_and_month">
              <p>{info.date}</p>
              <p>{info.month}</p>
            </div>
        </div>
      
    </div>
  )
}

export default EventCards
