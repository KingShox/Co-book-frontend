import React from 'react'
import '../css/EmployeeProfile.css'

const EmployeeProfile = (props) => {
  return (
    <div className='profile'>
    <div className='profile-content flex-col'>
        <div className='profile-header center'>
            <h3>Event name:</h3>
        </div>
        <div className='profile-body center'>
            contents goes here!!
        </div>
        <div className='center'>
            <button onClick={props.onClick} className='profile-button'>Close</button>
        </div>

    </div>

</div>

  )
}

export default EmployeeProfile