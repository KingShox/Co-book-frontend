import './App.css';
import SignInBox from './component/SignInBox';
import CompanyRegister from './component/CompanyRegister';
import CompanyChecker from './component/CompanyChecker';
import EmployeeRegister from './component/EmployeeRegister';
import Home from './pages/Home';
import {Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile';
import Messages from './pages/Messages';
import Events from './pages/Events';
import Employees from './pages/Employees';
import Settings from './pages/Settings';
import SignOut from './pages/SignOut';
import PrivateRoute from './component/PrivateRoute';



function App() {


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

          <Route path='/messages' 
          element={<PrivateRoute><Messages /></PrivateRoute>} />

          <Route path='/employees' 
          element={<PrivateRoute><Employees /></PrivateRoute>}/>

          <Route path='/events' 
          element={<PrivateRoute><Events /></PrivateRoute>} />

          <Route path='/setting' 
          element={<PrivateRoute><Settings/></PrivateRoute>} />

          <Route path='/signout' 
          element={<PrivateRoute><SignOut /></PrivateRoute>}/>
          
      </Routes>
  );
}

export default App;
