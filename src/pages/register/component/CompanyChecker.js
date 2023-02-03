import axios from 'axios'
import React, { useState } from 'react'
import {useNavigate} from 'react-router'
import Button from '../../../reusable/Button'
import Input from '../../../reusable/All_Inputs'


function CompnayChecker() {


  const pageJumper = useNavigate()
  const [errorMessage,setErrorMessage] = useState(false)
  const [companyName, setCompanyName] = useState({
    name : ""
  })

  const changeHandler =(event)=>{
    const name = event.target.name
    const value = event.target.value
    const tempCompanyName = {...companyName}
    tempCompanyName[name] =value
    setCompanyName(tempCompanyName)


  }
  const checkHandler =(event)=>{
    axios.get(`http://localhost:8080/getCompanyByName/${companyName.name}`)

    .then((response) =>{
      setCompanyName(response)
      pageJumper('/employeeRegister')
      
    }).catch(errorMessage);
    {setErrorMessage(true)}
    
  }

  const companyRegisterHandler = ()=>{
    pageJumper("/companyRegister")
  }

  

  return (
    <div className='box-one'>
        <div className='box-two flex-col center'>
        <div className='center'>
        <h1 className='flex-col'> Your Company ?</h1>
        </div>
        <div className=' box-3 flex-col center'>
            <Input className={"input-1"} type={'text'} placeholder={'Company Name:'} onChange={changeHandler} name="name" value={companyName.name}/>
        </div>
        <div className='flex-col'>
                <Button className={'button-2'}type="submit" text={'Check'} onClick={checkHandler} />
        </div>
        <div>
          {errorMessage && <div className='flex-col center'>
            <span>Company Not Found!</span>
            <span>Please Register Your Company!</span>
            <Button className={'button-2'} type="submit" text={'+ Conpmany Register'} onClick={companyRegisterHandler}/>
            </div>}
        </div>
        </div>

    </div>
  )
}

export default CompnayChecker