import React from 'react'
import NavBar from '../../reusable/NavBar'
import SideBar from '../SideBar'
import SideChat from '../SideChat'
import SideChatBox from '../SideChatBox'
import './Messages.css'


function Messages() {
  return (
    <div className='chat-box flex-col'>
      <div className='container'>
        <SideBar/>
        <SideChatBox/>
      </div>
    </div>
  )
}

export default Messages