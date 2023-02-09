import React, { useState } from 'react'
import '../css/CreateEvent.css'
import Button from '../../../reusable/Button'
import axios from 'axios'
import PopUps from '../../../reusable/PopUps'

const CreateEvent = () => {


  
  const[event1,setEvent] = useState({
    name:"",
    venue:"",
    theme:"",
    day:"",
    time:"",
    typeOfEvent:"",
    eventDetail:""
  })

  const changeHandler = (event) =>{
    const name = event.target.name
    const value = event.target.value
    const temptEvent = {...event1}
    temptEvent[name] = value
    setEvent(temptEvent)
  }

  const sumbitHandler = () => {
    axios.post('http://localhost:8080/createEvent', event1)
    .then((response) => {
      
      }).catch((e) => {
      console.log(e)
    })
  }



  return (
    <div className='event-box flex-col center event-gap'>
        <h2> Event</h2>
        
        <div className='flex-col detail-box event-gap'>
            <label><strong>Event Title:</strong></label>
            <input className='event-input2' type='text' onChange={changeHandler} name='name' value={event1.name}/>
            <label><strong>Venue:</strong></label>
            <input className='event-input2' type="textr" onChange={changeHandler} name='venue' value={event1.venue}/>
            <label><strong>Theme:</strong></label>
            <input className='event-input2' type="text" onChange={changeHandler} name='theme' value={event1.theme} />
            <label><strong>Date:</strong></label>
            <input className='event-input2' type="date" onChange={changeHandler} name='day' value={event1.day}/>
            <label><strong>Time:</strong></label>
            <input className='event-input2' type="time" onChange={changeHandler} name='time' value={event1.time}/>
            <label><strong>Type Of Event:</strong></label>
            <input className='event-input2' type="text" onChange={changeHandler} name='typeOfEvent' value={event1.typeOfEvent}/>
            <label><strong>Details:</strong></label>
            <textarea className='detail-input' type="text" onChange={changeHandler}  name='eventDetail' value={event1.eventDetail} />
            <Button className={'button-1 center'} type="submit" text={'+ Create Event'} onClick={sumbitHandler}/>

        </div>
      


        
    </div>
  )
}

export default CreateEvent