import React, { useState } from 'react'
import '../component/Register.css'
import Button from '../reusable/Button'
import Input from '../reusable/Input'
import CompanyRegister from './CompanyRegister' 
import CompnayChecker from './CompanyChecker'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function SignInBox(props) {
  
  const navigate = useNavigate();
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
 
  const submitHandler = () =>{
    axios.post("http://localhost:8080/signInEmployee", employee)
    .then((response) =>{
      console.log(response.data)
      localStorage.setItem("companyEmail", response.data.companyEmail)

      navigate("/home")

    }).catch((e) =>{
      console.log(e)
    })

  }
  
  return (
    <div className='box-one'>
        <div className='box-two flex-col center'>
          <div className='top-text'>
            <h1 className='flex-col'>CoBook. <i class="fa-solid fa-book-quran"></i></h1>
          </div>
         
        <div className=' box-3 flex-col center'>
                <Input className={"input-1"} type={'email'} placeholder={'Company email:'} onChange={changeHandler} name='companyEmail' value={employee.companyEmail}/>
                <Input className={"input-1"} type={'password'} placeholder={'Password:'} onChange={changeHandler} name='password' value={employee.password}/>

        </div>
        <div className='flex-col'>
                <Button className={'button-1'}type="submit" text={'Log In'} onClick={submitHandler} />
        </div>
          <div className='full-width center flex-col gap'>
            <Button className={'button-2'} type="submit" text={'+ Conpmany Register'} on click/>
            <Button className={'button-2'} />
          </div>
        </div>
    </div>
  )
}

export default SignInBox