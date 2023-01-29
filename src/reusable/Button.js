import React from 'react'
import './Button.css'

function Button(props) {
  return (
    <div className={props.outerDivCss}>
         <button id={props.id} value={props.value} className={props.className} onClick={props.onClick}>{props.text}</button>
    </div>
  )
}

export default Button