import React from 'react'
import './SideNav.css'

const SideNav = () => {
  return (
    <div className='sidenav'>
        <span className='company-logo'>Company logo  Chat</span>
        <div className='employee'>
            <img src='https://www.pngkit.com/png/detail/45-450450_portfolio-patrick-starfish-pictures-patrick-star-season-patrick.png' alt='Patrick'></img>
            <span className='center'>Patrick</span>
        </div>
    </div>
  )
}

export default SideNav