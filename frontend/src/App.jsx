import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OutNavbar from './components/OutNavbar';
import Login from './components/Login';
import Signup from './components/Signup';
import InNavbar from './components/InNavbar';
import Dashboard from './components/Dashboard';
import Appoinments from './components/Appoinments';
import Patients from './components/Patients';
import Profile from './components/Profile';

function App() {
  const style = {
    container: {
      width:"100%",
      height:"100%",
      maxWidth:"1200px",
      margin: "0 auto",
    }
  }
  return (
    <div style={{width:"100%", height:'100vh',overflow:'scroll', background: "silver"}}>
      <Router>
        <Routes>
          <Route path='/' element={<OutNavbar/>} />
          
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/user/dashboard' element={<><InNavbar/><div style={style.container}><Dashboard/></div></>}/>
          <Route path='/user/appointments' element={<><InNavbar/><div style={style.container}> <Appoinments/></div></>} />
          <Route path='/user/patients' element={<><InNavbar/><div style={style.container}> <Patients/></div></>} />
          <Route path='/user/profile' element={<><InNavbar/><div style={style.container}><Profile/> </div></>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
