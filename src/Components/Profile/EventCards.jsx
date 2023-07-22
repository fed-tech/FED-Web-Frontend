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
            <img  src="https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
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