import React from 'react'
import Input from '../reusable/Input'
import './SideSearch.css'

const SideSearch = () => {
  return (
    <div className='search flex-col'>
        <div className='search-box'>
            <input type='text' placeholder='Search Employee:'/>
        </div>
        <div className='employee-chat'>
            <img src='https://www.pngkit.com/png/detail/45-450450_portfolio-patrick-starfish-pictures-patrick-star-season-patrick.png' alt=''></img>
            <div className='employee-chatInfo'>
                <span>Patrick</span>
            </div>
        </div>
    </div>
  )
}

export default SideSearch