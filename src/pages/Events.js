import React from 'react'
import NavBar from '../reusable/NavBar'
import {BiCalendarEdit} from 'react-icons/bi'

function Events() {
  return (
    <div className='center'>
      <NavBar/>
        
        <div>
        <div><BiCalendarEdit/></div>
        <h1>Create Event</h1>
        
        
        </div>
    </div>
  )
}

export default Events