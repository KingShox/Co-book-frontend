import React, { useState } from 'react'
import '../css/Register.css'
import Button from '../../../reusable/Button'
import Input from '../../../reusable/All_Inputs'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {auth} from "../../../FireBase"
import {signInWithEmailAndPassword } from "firebase/auth";

function SignInBox() {
  const [errorMessage,setErrorMessage] = useState(false)
  const pageJumper = useNavigate()
  const [employee, setEmployee] = useState({
    companyEmail : "",
    password: ""
  })

  const changeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value
    const tempEmployee = {...employee}
    tempEmployee[name] =value
    setEmployee(tempEmployee)
  }
 
  const submitHandler = (event) =>{
    axios.post("http://localhost:8080/signInEmployee", employee)
    .then(() =>{ 
      pageJumper("/home")

    }).catch((e) =>{
      console.log(e)
    })

  }

  const logInHandler = async (event) =>{
    event.preventDefault()
    const companyEmail = event.target[0].value;
    const password = event.target[1].value;


    try {
      await signInWithEmailAndPassword(auth, companyEmail, password)
      pageJumper("/home")
    }catch (errorMessage){
      setErrorMessage(true)
  
    }

  }
  






  const companyRegisterHandler = ()=>{
    pageJumper("/companyRegister")
  }
  const companyCheckerHandler = ()=>{
      pageJumper("/companyChecker")
  }
  
  
  return (
    <div className='box-one'>
        <div className='box-two flex-col center'>
          <div className='top-text'>
            <h1 className='flex-col'>CoBook.</h1>
          </div>
         
        <form className=' box-3 flex-col center' onSubmit={logInHandler}>
                <Input className={"input-1"} type={'email'} placeholder={'Company email:'} onChange={changeHandler} name='companyEmail' value={employee.companyEmail}/>
                <Input className={"input-1"} type={'password'} placeholder={'Password:'} onChange={changeHandler} name='password' value={employee.password}/>
                {errorMessage && <span>Incorrect log in</span>}
                <button className='button-1'type="submit"onClick={submitHandler} >Log In</button>
                
        </form>
          <div className='full-width center flex-col gap'>
            <Button className={'button-2'} type="submit" text={'+ Conpmany Register'} onClick={companyRegisterHandler}/>
            <Button className={'button-2'} type="sumbit" text={"+ Employee Register"} onClick={companyCheckerHandler}/>
          </div>
        </div>
    </div>
  )
}


export default SignInBox