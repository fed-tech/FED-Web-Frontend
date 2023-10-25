import React, { useEffect, useState } from 'react'
import './cssp/EventCards.css'
import axios from 'axios'

function EventCards({info,setShow, setCardNo}) {
  const handleShow = ()=>{
    setShow(true)
    setCardNo(info)
    // console.log(cardNo)
  }
  return (
    <div className='eventcards' onClick={handleShow}>
        <div className='event_img' >
            <img  src={info.image} alt="" />
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