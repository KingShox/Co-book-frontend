import React from 'react'
import NavBar from '../reusable/NavBar'
import SideBar from '../component/SideBar'
import SideChat from '../component/SideChat'
import SideChatBox from '../component/SideChatBox'
import './Messages.css'


function Messages() {
  return (
    <div className='chat-box flex-col'>
      <div className='container'>
        <NavBar/>
        <SideBar/>
        <SideChatBox/>
      </div>
    </div>
  )
}

export default Messages