import React from 'react'
import SideChat from './SideChat'
import SideNav from './SideNav'
import SideSearch from './SideSearch'


const SideBar = () => {
  return (
    <div className='sidebar flex-col'>
        <SideNav />
        <SideSearch/>
        <SideChat/>

    </div>
  )
}

export default SideBar