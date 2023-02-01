import React from 'react'
import './Register.css'
import Input from '../reusable/Input'
import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth"
import { auth, db, storage } from "../FireBase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from 'react-router'
import { useState } from 'react'
import '../reusable/Button.css'
import { doc, setDoc } from "firebase/firestore"; 
import axios from 'axios'


function EmployeeRegister() {

    const[err,setErr] = useState(false)
    const pageJumper = useNavigate()
    const [employee, setEmployee] = useState({
        fullName: "",
        companyEmail: "",
        password: "",
        picture: ""
      })

    const changeHandler = (event) =>{
        const name = event.target.name
        const value = event.target.value
        const temptEmployee = {...employee}
        temptEmployee[name] = value
        setEmployee(temptEmployee)
      }


      const sumbitHandler = () => {
        axios.post('http://localhost:8080/registerEmployee', employee)
        .then((response) => {
          pageJumper("/home")
      }).catch((e) => {
          console.log(e)
      })
      }

    const registerHandler = async (event) =>{
        event.preventDefault()
        const fullName = event.target[0].value;
        const companyEmail = event.target[1].value;
        const password = event.target[2].value;
        const file = event.target[3].value;


        try{
        const res = await createUserWithEmailAndPassword(auth, companyEmail, password);

        const date = new Date().getTime();
        const storageRef = ref(storage, `${fullName + date}`);


        await  uploadBytesResumable(storageRef, file).then(()=>{
            getDownloadURL(storageRef).then( async (downloadURL) => {
            try{
              await updateProfile(res.user, {
                fullName,
                photoURL : downloadURL

              });
              await setDoc(doc(db, "users", res.user.uid),{
                uid: res.user.uid,
                fullName,
                companyEmail,
                photoURL:downloadURL
            });
            await setDoc(doc(db,"userChats",res.user.uid),{});
            pageJumper("/home");

        }catch(err){
            setErr(true);
        
        }
        
            });
          }
        );

        }catch(err){
            setErr(true)

        }


    }
  return (
    <div className='box-one'>
        <div className='box-two flex-col center' >
            <div className='center'>
                <h1 className='flex-col'>Welcome(Company name) Employee</h1>
            </div>
            <form className=' flex-col center' onSubmit={registerHandler} >
                <Input className={"input-1"} type={'text'} placeholder={'Full name:'} onChange={changeHandler} name='fullName' value={employee.fullName}/>
                <Input className={"input-1"} type={'emailt'} placeholder={'Company Email:'} onChange={changeHandler} name='companyEmail' value={employee.companyEmail}/>
                <Input className={"input-1"} type={'password'} placeholder={'Password:'} onChange={changeHandler} name='password' value={employee.password}/>
                <input required style={{display:'none'}} type='file' id='file' onChange={changeHandler} name='picture' value={employee.picture} />
                <label htmlFor='file' type="file" accept="image/*" className='center gap'>
                    <img src='' alt=""/>
                    <span>  Add a Profile Picture</span>
                </label>
            <button className='button-2' onClick={sumbitHandler}>+ Register</button>
            {err && <span>Something went wrong</span>}
        </form>
    </div>

</div>
    
  )
}

export default EmployeeRegister