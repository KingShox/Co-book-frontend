import React, {useContext} from 'react'
import '../css/PicComponent.css'
import { AuthContext } from '../../../context/AuthContext'

function PicComponent() {


  const {currentUser} = useContext(AuthContext)
  return (
    <div className='center'>
        <div className="pic">
        <img  src={currentUser.photoURL} className="pic-img" alt='profile pic'/>
            <div className="pic-info">
                <div className='flex-col '>
                <h1>{currentUser.displayName}</h1>
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