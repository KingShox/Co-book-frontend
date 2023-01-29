import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'

const PrivateRoutes = ({component: component, ...rest}) => {
    const response = localStorage.getItem("response");

    return response ? <Outlet/> :<Navigate to="/" />
};

export default PrivateRoutes