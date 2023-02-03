import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'


import '../css/SideNav.css'

const SideNav = () => {

  const {currentUser} = useContext(AuthContext)
  return (
    <div className='sidenav'>
        <span className='company-logo'>Company logo  Chat</span>
        <div className='employee'>
            <img src={currentUser.photoURL} alt='Patrick'></img>
            <span className='center'>{currentUser.displayName}</span>
        </div>
    </div>
  )
}

export default SideNav