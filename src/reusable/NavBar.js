import React from 'react'
import './NavBar.css'
import * as FaIcons from 'react-icons/fa'
import {TbMessage2} from 'react-icons/tb'
import {GoGear,GoSignOut} from 'react-icons/go'




function NavBar() {

  return (
    <div className='nav-box'>
      <div className='links'>
        <ul className='flex-col'>
        <div className='center flex-col'>
        <a href='/profile'><img className='avatar' src='https://www.pngkit.com/png/detail/45-450450_portfolio-patrick-starfish-pictures-patrick-star-season-patrick.png' alt='profile'></img></a>
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
            <a href='/messages'>
              <div className='icon'><TbMessage2/></div>
              
            </a>
          </li>
          <li className='list'>
            <a href='/employees'>
              <div className='icon'><FaIcons.FaHardHat/></div>
              
            </a>
          </li>
          <li className='list'>
            <a href='/events'>
              <div className='icon'><FaIcons.FaCalendarAlt/></div>
              
            </a>
          </li>
          <li className='list'>
            <a href='/setting'>
              <div className='icon'><GoGear/></div>
              
            </a>
          </li>
          <li className='list'>
            <a href='/signout'>
              <div className='icon'><GoSignOut/></div>
              
            </a>
          </li>
        </ul>
      </div>  
    </div>
  )
}

export default NavBar