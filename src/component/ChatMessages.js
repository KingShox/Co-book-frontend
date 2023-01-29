import React from 'react'
import './ChatMessages.css'

const ChatMessages = () => {
  return (
    <div className='chat-messages'>
        <div className='message-info flex-col'>
            <img src='https://yt3.googleusercontent.com/By7y3DgW6vAJEVRzzA1-xQCgklqiRyP3ZQA-u1I6kdckEryMmTK6mr7alRfklIO1Jrp2t3_A=s900-c-k-c0x00ffffff-no-rj' alt='spongebob' />
            <span>just now</span>
        </div>
        <div className='message-content'>
            <p>hello</p>

        </div>
    </div>
    
  )
}

export default ChatMessages