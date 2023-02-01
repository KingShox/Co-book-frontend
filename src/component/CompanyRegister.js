import React from 'react'
import './Register.css'
import Button from '../reusable/Button'
import Input from '../reusable/Input'

function CompanyRegister() {


  return (
    <div className='box-one'>
        <div className='box-two flex-col center'>
        <div >
        <h1 className='flex-col'> + Company Register </h1>
        </div>
        <div className=' box-3 flex-col center'>
                <Input className={"input-1"} type={'text'} placeholder={'Company Name:'}/>
                <Input className={"input-1"} type={'text'} placeholder={'Address:'}/>
                <Input className={"input-1"} type={'email'} placeholder={'Email:'}/>
                <Input className={"input-1"} type={'tel'} placeholder={'Phone:'}/>
                <Input className={"input-1"} type={'number'} placeholder={'Number of Employees:'}/>
                <Input className={"input-1"} type={'password'} placeholder={'Password:'}/>
                <Input className={"input-1"} type={'passsword'} placeholder={'Confirm Password:'}/>
        </div>
        <div className='flex-col'>
                <Button className={'button-2'}type="submit" text={'Register'}  />
        </div>
        </div>

    </div>
  )
}

export default CompanyRegister