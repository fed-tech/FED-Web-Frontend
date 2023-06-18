import React from 'react'
import './cssp/EventCards.css'

function EventCards() {
  return (
    <div className='eventcards'>
        <div className='event_img'>
            <img src="https://images.unsplash.com/photo-1682695797873-aa4cb6edd613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
        </div>
        <div className='event_content'>
            <h2>THE FREDPRENEUR SHOW</h2>
            <p>29th January</p>
        </div>
      
    </div>
  )
}

export default EventCards
