import React from 'react';
import './Login.css';
import {NavLink} from 'react-router-dom'
import OutNavbar from './OutNavbar'

const Login = () => {
  return (
    <div className='back'>
    <OutNavbar/>
	<div className='background'>
      <div className='container'>
        <h2>Login here</h2>
        <div className='field'>
          <span class="material-symbols-rounded" style={{fontSize:'25px'}}>person</span>
          <input name='name' placeholder='  Username' type='text'/>
        </div>
        <div className='field'>
          <span class="material-symbols-rounded" style={{fontSize:'20px'}}>
          lock
          </span>
          <input name='password' placeholder='  Password' type='password'/>
        </div>
        <div className='forgot'>
			<div><input type='checkbox'/><p> Remember me</p></div> 
			<p>Forgot Password?</p>
		</div>
        <NavLink to='/user/dashboard'><button>Login</button></NavLink>
        <div className='forgot'>
			<p>Doesn't have an account?<NavLink to='/signup'><span>Register</span></NavLink></p>
		</div>
      </div>
    </div>
    </div>
  )
}

export default Login