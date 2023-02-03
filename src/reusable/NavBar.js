import React, { useContext } from 'react'
import './NavBar.css'
import * as FaIcons from 'react-icons/fa'
import {TbMessage2} from 'react-icons/tb'
import {GoGear,GoSignOut} from 'react-icons/go'
import {auth} from '../FireBase'
import { signOut } from 'firebase/auth'
import { AuthContext } from '../context/AuthContext'


function NavBar() {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className='nav-box'>
      <div className='links'>
        <ul className='flex-col'>
        <div className='center flex-col'>
        <a href='/profile'><img className='avatar' src={currentUser.photoURL} alt='profile'></img></a>
        </div>
          <li className ='list active'>
            <a href='/home'>
              <div className='icon'><FaIcons.FaHome/></div>
            </a>
          </li>
          <li className='list'>
            <a href='/profile'>
              <div className='icon'><FaIcons.FaUserTie/></div>
              
            </a>
          </li>
          <li className='list'>
            <a href='/talk'>
              <div className='icon'><TbMessage2/></div>
              
            </a>
          </li>
          <li className='list'>
            <a href='/employees'>
              <div className='icon'><FaIcons.FaHardHat/></div>
              
            </a>
          </li>
          <li className='list'>
            <a href='/news'>
              <div className='icon'><FaIcons.FaCalendarAlt/></div>
              
            </a>
          </li>
          <li className='list'>
            <a href='/setting'>
              <div className='icon'><GoGear/></div>
              
            </a>
          </li>
          <li className='list'>
            <button className='signout' onClick={()=>signOut(auth)}>
              <GoSignOut/>
            </button>
          </li>

        </ul>
      </div>  
    </div>
  )
}

export default NavBar