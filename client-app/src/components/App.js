import './App.css';
import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import api from "../api/records";
//Components
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import Login from './Login.js';
import Signup from './Signup.js';
import User from './User.js';
import Recent from './Operationssection.js';
import View from './View.js';
import Dashboard from './Dashboard';

function App() {
  return (
    // for centeralizing page 2 divs are used
    <div className='d-flex justify-content-center' style={{width:"100vw", backgroundColor:"silver",height:"fit-content", minHeight:"100vh"}}>
      <div style={{width:"100%",maxWidth:"1100px",height:"fit-content", minHeight:"100vh", backgroundColor:"white"}}>
        {/* <h1>Main</h1>
        <button className='btn btn-success'>Submit</button> */}
        <Router>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/user' element={<User />} />
            <Route path='/user/recent' element={<Recent />} />
            <Route path='/user/view' element={<View />} />
            <Route path='/user/dashboard' element={<Dashboard />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
