import React from 'react'
import Button from '../reusable/Button'
import './Register.css'
import Input from '../reusable/Input'

function EmployeeRegister() {
  return (
    <div className='box-one'>
        <div className='box-two flex-col center'>
            <div className='center'>
                <h1 className='flex-col'>Welcome(Company name) Employee</h1>
            </div>
            <div className='center flex-row'>
                <Input className={"input-1 center"} type={'id'} placeholder={'Employee ID:'}/>
            </div>
            <div className=' box-3 center  flex-row'>
                <div className='flex-col center'>
                <Input className={"input-1"} type={'id'} placeholder={'First name:'}/>
                <Input className={"input-1"} type={'text'} placeholder={'Birthday mm/dd/yyyy:'}/>
                <Input className={"input-1"} type={'emailt'} placeholder={'Company Email:'}/>
                <Input className={"input-1"} type={'text'} placeholder={'Department:'}/>
                <Input className={"input-1"} type={'text'} placeholder={'Gender'}/>
                <Input className={"input-1"} type={'password'} placeholder={'Password:'}/>
                </div>
                <div className='flex-col'>
                <Input className={"input-1"} type={'text'} placeholder={'Last name:'}/>
                <Input className={"input-1"} type={'text'} placeholder={'Start day mm/dd/yyyy:'}/>
                <Input className={"input-1"} type={'email'} placeholder={'Personal email:'}/>
                <Input className={"input-1"} type={'text'} placeholder={'Job title:'}/>
                <Input className={"input-1"} type={'text'} placeholder={'Phone:'}/>
                <Input className={"input-1"} type={'password'} placeholder={'Confirm Password:'}/>
                    
                </div>
                
            </div>
    
        
        <div className='flex-col'>
            <Button className={'button-2'}type="submit" text={'+ Register'}  />
        </div>
    </div>

</div>
    
  )
}

export default EmployeeRegister