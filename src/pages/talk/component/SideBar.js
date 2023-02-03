import React from 'react'
import Chats from './Chats'
import SideNav from './SideNav'
import Search from './Search'


const SideBar = () => {
  return (
    <div className='sidebar flex-col'>
        <SideNav />
        <Search/>
        <Chats/>

    </div>
  )
}

export default SideBar