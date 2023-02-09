import './App.css';
import SignInBox from './pages/register/component/SignInBox';
import CompanyRegister from './pages/register/component/CompanyRegister';
import CompanyChecker from './pages/register/component/CompanyChecker';
import EmployeeRegister from './pages/register/component/EmployeeRegister';
import Home from './pages/home/component/Home';
import {Route, Routes } from 'react-router-dom';
import Profile from './pages/profile/component/Profile';
import Talk from './pages/talk/component/Talk';
import Employees from './pages/employees/component/Employees';
import Settings from './pages/setting/component/Settings';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import { Navigate } from 'react-router-dom';
import News from './/pages/news/component/News';



function App() {

  
  const {currentUser} = useContext(AuthContext)
  const PrivateRoute = ({children}) => {
    
        if(currentUser === null){
            return <Navigate to="/" />
        }
        return children
  }


  return (
      <Routes >
    
          <Route path='/' 
          element={<SignInBox/> } />

          <Route path='/companyRegister'  
          element={<CompanyRegister />}/>

          <Route path='/employeeRegister' 
          element={<EmployeeRegister />} />

          <Route path='/companyChecker' 
          element={<CompanyChecker/>} />

          <Route path='/home' 
          element={<PrivateRoute><Home/></PrivateRoute>} />

          <Route path='/profile' 
          element={<PrivateRoute><Profile /></PrivateRoute>} />

          <Route path='/talk' 
          element={<PrivateRoute><Talk /></PrivateRoute>} />

          <Route path='/employees' 
          element={<PrivateRoute><Employees /></PrivateRoute>}/>

          <Route path='/news' 
          element={<PrivateRoute><News /></PrivateRoute>} />

          <Route path='/setting' 
          element={<PrivateRoute><Settings/></PrivateRoute>} />

      </Routes>
  );
}

export default App;
