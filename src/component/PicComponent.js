import React from 'react'
import '../component/PicComponent.css'

function PicComponent() {
  return (
    <div className='center'>
        <div className="pic">
        <img  src='https://www.pngkit.com/png/detail/45-450450_portfolio-patrick-starfish-pictures-patrick-star-season-patrick.png' className="pic-img"/>
            <div className="pic-info">
                <div className='flex-col '>
                <h1>Patrick Star</h1>
                <p>Employee of the month</p>
                </div>
                
                <ul className='flex-col'>
                    
                    <li>Music: Hard Rock</li>
                    <li>Sport: Raiders</li>
                    <li>Music:</li>
                    <li>Music:</li>
                    <li>Music:</li>
            
                </ul>
            
            </div>
        </div>
    </div>
  )
}

export default PicComponent