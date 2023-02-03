import React from 'react'
import NavBar from '../../../reusable/NavBar'
import {BiCalendarEdit} from 'react-icons/bi'
import CreateEvent from './CreateEvent'
import CreateNews from './CreateNews'
import '../css/Neww.css'

function News() {
  return (
    <div className='flex-row fill-vertical'>
      <NavBar/>
      
        
        <div className=' flex-col full-width fill-vertical center'>
        <div className='title center'>
      <h1>News/Events</h1>
      </div>
      <div className='flex-row center gap'>
          <div>
          <CreateEvent/>
          </div>
          <div>
          <CreateNews/>
          </div>
        </div>


        </div>
    </div>
  )
}

export default News