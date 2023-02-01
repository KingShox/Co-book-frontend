import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = (props) => {
    

    const renderContent = () => {
       
        
        const companyEmail = localStorage.getItem("companyEmail")

        
        if(companyEmail !== null){
            return <Navigate to="/" />
        }else{
            return props.children
        }
        
    }


    return (
        renderContent()
    )
    
  
}

export default PrivateRoute