import React from 'react'
import { FaVideo,FaUserPlus,FaEllipsisH } from 'react-icons/fa'
import Input from '../reusable/Input'
import './SideChatBox.css'
import SideMessages from './SideMessages'
import Button from '../reusable/Button'

const SideChatBox = () => {
  return (
    <div className='SideChatBox flex-col'>
        <div className='box-info'>
            <span>SpongeBob</span>
            <div className='chat-icons'>
                <div className='icon'><FaVideo/></div>
                <div className='icon'><FaUserPlus/></div>
                <div className='icon'><FaEllipsisH/></div>
            </div>
        </div>
            <div className='flex-col'>
            <SideMessages/>
            <div classname='send-text'>
                <input placeholder="Type:" />
                <button>Send:</button>
            </div>
        </div>
    </div>
  )
}

export default SideChatBox