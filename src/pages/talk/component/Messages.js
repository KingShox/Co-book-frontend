import { doc, onSnapshot } from 'firebase/firestore';
import React, { useContext, useState,useEffect } from 'react'
import { ChatContext } from '../../../context/ChatContext'
import { db } from '../../../FireBase';
import Message from './Message'

const Messages = () => {

  const {data} = useContext(ChatContext);

  const [messages, setMessages] = useState([])

  useEffect(() => {
    const unsub = onSnapshot(doc(db,"chats", data.chatId),(doc) =>{
      doc.exists() && setMessages(doc.data().messages)
    })
    return ()=>{
      unsub()
    }
    
  }, [data.chatId]);

  console.log(messages)

  
  return (
    <div className='sideMessages flex-col'>
      {messages.map(m =>(
        <Message message ={m} key={m.id}/>
      ))}
    </div>
  )
}

export default Messages