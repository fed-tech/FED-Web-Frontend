import React from 'react'
import './cssp/AddEvent.css'

function AddEvent() {
  return (
    <div className='addevent'>
        <form action="">
            <input type="text" placeholder='Event Title'/>
            <input type="text" placeholder='About the Event'/>
            <input type="text" placeholder='Poster Link'/>
            <div className='addevent_date'>
                <input type="text" placeholder='Event Date'/>
                <input type="text" placeholder='Event Month'/>
            </div>
            <input type="text" placeholder='Registration Type'/>
            <input type="submit" value="Submit" className='addevent_submit_btn'/>
        </form>
    </div>
  )
}

export default AddEvent
