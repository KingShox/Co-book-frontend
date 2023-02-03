import React from 'react'
import NavBar from '../../../reusable/NavBar'
import SideBar from './SideBar'
import SideChatBox from './Chat'
import '../css/Messages.css'


function Chats() {
  return (
    <>
    <NavBar/>
    <div className='chat-box flex-col'>
      <div className='container'>

        <NavBar/>
        <SideBar/>
        <SideChatBox/>
      </div>
    </div>
    </>
  )
}

export default Chats