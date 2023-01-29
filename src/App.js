import './App.css';
import SignIn from './component/SignIn';
import CompanyRegister from './component/CompanyRegister';
import CompnayChecker from './component/CompnayChecker';
import EmployeeRegister from './component/EmployeeRegister';
import Home from './component/pages/Home';
import NavBar from './reusable/NavBar';
import { Route, Routes } from 'react-router-dom';
import Profile from './component/pages/Profile';
import Messages from './component/pages/Messages';
import Events from './component/pages/Events';
import Employees from './component/pages/Employees';
import Settings from './component/pages/Settings';
import SignOut from './component/pages/SignOut';
import PrivateRoutes from './component/PrivateRoutes';

function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<SignIn/>}/>
          <Route path='/CompanyRegister' element={<CompanyRegister/>}/>
          <Route path='/EmployeeRegister' element={<EmployeeRegister/>}/>
          <Route path='/CompnayChecker' element={<CompnayChecker/>}/>
        </Routes>
        <PrivateRoutes>
          <NavBar/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/messages' element={<Messages/>}/>
          <Route path='/employees' element={<Employees/>}/>
          <Route path='/events' element={<Events/>}/>
          <Route path='/setting' element={<Settings/>}/>
          <Route path='/signout' element={<SignOut/>}/>
        </PrivateRoutes>
    </>
  );
}

export default App;
