import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar2';

const Login = () => {
  return (
	<div>
		{/* Testing div */}
		{/* <div>
			<h1>Login</h1>
			<NavLink to="/user">
				<button className='btn btn-success'>
					Log in
				</button>
			</NavLink>
			<NavLink to="/">
				<button className='btn btn-secondary'>
					Cancel
				</button>
			</NavLink>
		</div> */}
		{/* Main div */}
		<div>
		<Navbar/>
		<section
		className="d-flex align-items-center justify-content-center"
		style={{ margin: 0, padding: 0, background: 'gray', width: '100%', height: '100vh' }}
		>
		<div>
			<div className="container d-flex justify-content-between p-0" style={{ background: 'white', borderRadius: '10px', width: '90%' }}>
			<div className="left p-3 d-flex flex-column justify-content-center" style={{ width: '450px' }}>
				<h1 style={{ color: 'rgba(0, 0, 0, 0.7)', fontWeight: 200 }}>Welcome!</h1>
				<p>Now save your record on cloud</p>
				{/* <div className="input-group mb-3">
				<span className="input-group-text" id="basic-addon1">@</span> 
				<input type="text" className="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" />
				</div> */}
				<div className="input-group mb-3">
				{/* <span className="input-group-text" id="basic-addon1">@</span> */}
				<input type="text" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" />
				</div>
				{/* <div className="input-group mb-3">
				<span className="input-group-text" id="basic-addon1">@</span> 
				<input type="text" className="form-control" placeholder="Phone" aria-label="Username" aria-describedby="basic-addon1" />
				</div> */}
				<div className="input-group mb-3">
				{/* <span className="input-group-text" id="basic-addon1">@</span> */}
				<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
				</div>
				<div className="mb-3 d-flex justify-content-between">
				<a href="#" style={{ color: '#8c7569' }}>Forget your password?</a>
				<NavLink to="/user"><button type="submit" className="btn btn-primary" style={{ background: '#8c7569', border: 'none' }}>Login</button></NavLink>
				</div>
				<div className=" d-flex  justify-content-center">
				<p> Don't have an account?</p>
				<NavLink to="/signup" className="mx-2" style={{ color: '#8c7569' }}>Sign Up now</NavLink>
				</div>
			</div>
			<div className="right" style={{ width: '500px' }}>
				<img src={require('../images/doctor.jpg')} height="100%" width="100%" style={{ margin: 0, borderRadius: '0 10px 10px 0', marginLeft: 'auto' }} />
			</div>
			</div>
		</div>
		</section>
		</div>
	</div>
  )
}

export default Login