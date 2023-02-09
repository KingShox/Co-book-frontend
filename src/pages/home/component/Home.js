import React from 'react'
import NavBar from '../../../reusable/NavBar'
import EventComponent from './EventComponent'
import NewsComponent from './NewsComponent'
import '../css/Home.css'



function Home() {
  return (
    <div className='center  ' >
      <NavBar/>
      <div className='flex-col gap homeTop homeLeft'>
        <EventComponent/>
        <NewsComponent/>
      </div>
    </div>
    
   
  )
}

export default Home