import React from 'react'
import './Login.css';
import OutNavbar from './OutNavbar'
import {NavLink} from 'react-router-dom'
// import './Signup.css';

const Signup = () => {
  return (
	<div className='back'>
    <OutNavbar/>
    <div className='background'>
      <div className='container'>
        <h2>Sign up here</h2>
        <div className='field'>
          <span class="material-symbols-rounded" style={{fontSize:'25px'}}>person</span>
          <input name='name' placeholder='  Username' type='text'  />
        </div>
		<div className='field'>
          <span class="material-symbols-rounded" style={{fontSize:'25px'}}>alternate_email</span>
          <input name='email' placeholder='  example@gmail.com' type='email'/>
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
        <NavLink to='/user/dashboard'><button>Sign up</button></NavLink>
        <div className='forgot'>
			<p>Already have an account?<NavLink to='/login'>Log in</NavLink></p>
		</div>
      </div>
    </div>
  </div>
  )
}

export default Signup