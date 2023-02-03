import React, { useContext, useState,useEffect } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import '../css/SideSearch.css'
import { db } from '../../../FireBase'
import { doc, onSnapshot } from 'firebase/firestore'
import { ChatContext } from '../../../context/ChatContext'

const Chats = () => {

    const [chats, setChats] = useState([]);

    const { currentUser } = useContext(AuthContext);
    const { dispatch } = useContext(ChatContext);
  
    useEffect(() => {
      const getChats = () => {
        const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
          setChats(doc.data());
        });
  
        return () => {
          unsub();
        };
      };
  
      currentUser.uid && getChats();
    }, [currentUser.uid]);
  
    const handleSelect = (u) => {
      dispatch({ type: "CHANGE_USER", payload: u });
    };
    console.log(Object.entries(chats))
  return (
    <div className='side-chat flex-col'>
        {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) => (
        <div className='employee-chat'onClick={() => handleSelect(chat[1].userInfo)}  key={chat[0]}>
            <img src={chat[1].userInfo.photoURL} alt=""/>
            <div className='employee-chatInfo'>
                <span>{chat[1].userInfo.displayName}</span>
                <p>{chat[1].lastMessage?.text}</p>
            </div>
        </div>
))}
    </div>
  )
}

export default Chats