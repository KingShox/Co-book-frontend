import React from 'react'
import '../component/Register.css'
import Button from '../reusable/Button'
import Input from '../reusable/Input'
import CompanyRegister from './CompanyRegister' 
import CompnayChecker from './CompnayChecker'

function SignIn() {
  return (
    <div className='box-one'>
        <div className='box-two flex-col center'>
        <div className='top-text'>
        <h1 className='flex-col'>CoBook. <i class="fa-solid fa-book-quran"></i></h1>
        </div>
         
        <div className=' box-3 flex-col center'>
                <Input className={"input-1"} type={'email'} placeholder={'Email:'}/>
                <Input className={"input-1"} type={'password'} placeholder={'Password:'}/>

        </div>
        <div className='flex-col'>
                <Button className={'button-1'}type="submit" text={'Log In'}  />
        </div>
        <div className='full-width center'>
        
        <a href={<CompanyRegister/>}>+ Company Register</a>
        <a href=''></a>
        </div>
        </div>
    </div>
  )
}

export default SignIn