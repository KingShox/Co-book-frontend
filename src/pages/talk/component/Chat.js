import React, { useContext } from 'react'
import { FaVideo,FaUserPlus,FaEllipsisH } from 'react-icons/fa'
import SideChatInput from './Input'
import '../css/Chat.css'
import SideMessages from './Messages'
import { ChatContext } from '../../../context/ChatContext'

const Chat = () => {

    const {data} = useContext(ChatContext)

  return (
    <div className='SideChatBox flex-col'>
        <div className='box-info'>
            <span>{data.user.displayName}</span>
            <div className='chat-icons'>
                <div className='icon'><FaVideo/></div>
                <div className='icon'><FaUserPlus/></div>
                <div className='icon'><FaEllipsisH/></div>
            </div>
        </div>
            <div className='flex-col'>
            <SideMessages/>
            <SideChatInput/>
        </div>
    </div>
  )
}

export default Chat