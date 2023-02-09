import React from 'react'
import background from './video/background.mp4'
import './Video.css'

const Video = () => {
  return (
    <div className='video'>
        <video src={background} autoPlay loop muted type="video.mp4" />
    </div>
  )
}

export default Video