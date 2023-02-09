import axios from 'axios';
import React, { useState,useEffect} from 'react'
import '../css/EventComponent.css'
import EventModal from './EventModal';

const EventComponent = () => {
    
    const[showModal,setShowModal] = useState(false);
    const[activeEvent,setActiveEvent]= useState(null)

    const diplaymodal =(event)=> {

        axios.get(`http://localhost:8080/getEventById/${event.target.id}`)
        .then((response)=>{
            setActiveEvent(response.data)
        })
        setShowModal(true)
    }
    const closeModal = ()=>{

        setShowModal(false);
    }

    const [events,setEvents] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/viewAllEvent")
        .then((response)=>{
            console.log("here")
            setEvents(response.data)
        })
        .catch((e)=>{
            console.log(e)
        })
    }, []);
    
  return (
    <div className='eventCard-box gap '>
        {events.map((event)=>{
            return (
            <div>
                <div class="event">
                    <div class="event-details">
                        <p class="event-title">Title: {event.name}</p>
                            <span>Date: {event.day}</span>
                            <span> Time: {event.time}</span>
                        <p class="event-text">Type of Event: {event.typeOfEvent}</p>
                        <button class="event-button center" id={event.id} onClick={diplaymodal}>More info</button>
                {showModal && activeEvent !== null && <EventModal activeEvent={activeEvent} onClick={closeModal}/>}
                </div>
                </div>
            </div>)
        })
        }
    </div>
  )
}

export default EventComponent