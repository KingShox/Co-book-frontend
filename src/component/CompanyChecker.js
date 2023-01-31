import React from 'react'
import Button from '../reusable/Button'
import Input from '../reusable/Input'


function CompnayChecker() {
  return (
    <div className='box-one'>
        <div className='box-two flex-col center'>
        <div className='center'>
        <h1 className='flex-col'> Your Company ?</h1>
        </div>
        <div className=' box-3 flex-col center'>
            <Input className={"input-1"} type={'text'} placeholder={'Company Name:'}/>
        </div>
        <div className='flex-col'>
                <a href='/EmployeeRegister'><Button className={'button-2'}type="submit" text={'Check'}  /></a>
        </div>
        </div>

    </div>
  )
}

export default CompnayChecker