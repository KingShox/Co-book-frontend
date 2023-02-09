import React from 'react'
import NavBar from '../../../reusable/NavBar'
import CreateEvent from './CreateEvent'
import CreateNews from './CreateNews'
import '../css/News.css'

function News() {
  return (
    <div className='flex-col center fill-vertical'>
      <NavBar/>
      <div className='title-gap center left'>
          <CreateEvent/>
          <CreateNews/>
      </div>
    </div>
  )
}

export default News