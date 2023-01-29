import React from 'react'
import '../reusable/Input.css'

function Input(props) {
  return (
    <div>
        <input placeholder={props.placeholder} className={props.className} name={props.name} type={props.type}></input>
    </div>
  )
}

export default Input