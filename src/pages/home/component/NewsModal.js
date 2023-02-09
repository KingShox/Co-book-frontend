import React from 'react'
import '../css/NewsModal.css'

const NewsModal = (props) => {
  return (
    <div className='newsModal'>
        <div className='newsModal-content flex-col'>
            <div className='newsModal-header center'>
                <h3>news name:</h3>
            </div>
            
            <div className='center flex-row gap'>
                <button  className='newsModal-button2'> Delete</button>
                <button onClick={props.onClick} className='newsModal-button'>Close</button>
            </div>

        </div>

    </div>
 
  )
}

export default NewsModal