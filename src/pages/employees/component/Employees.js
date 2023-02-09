import React from 'react'
import NavBar from '../../../reusable/NavBar'
import Input from '../../../reusable/All_Inputs'
import '../css/Employee.css'
import { useState } from 'react'
import EmployeeProfile from './EmployeeProfile'


function Employees() {


    const[showModal,setShowModal] = useState(false);

    const diplaymodal =()=> {
        setShowModal(true)
    }
    const closeModal = ()=>{
        setShowModal(false);
    }



  return (
    <div className='center employee-gap flex-col'>
      <NavBar/>
        <h1>Employees</h1>
        <Input className={"input-1"}  placeholder={"Search Employee"}/>
        <div className='emp-box flex-row gap '>
        <div>
            <div class="emp">
                <div class="emp-details">
                    <p class="emp-title">employee title</p>
                    <span>Date:</span>
                    <p class="emp-text">Here are the details of the employee</p>
                    <button class="emp-button center" onClick={diplaymodal}>More info</button>
                {showModal && <EmployeeProfile onClick={closeModal}/>}
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Employees