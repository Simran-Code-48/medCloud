import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar2';

const Signup = () => {

	const [userSignup, setUserSignup] = useState({
		name:"",
		email:"",
		
		password:""
	});
	// const handleInput = (e) => {
	// 	const name = e.target.name;
	// 	const value = e.target.value;
	// 	console.log(name);
	// 	// setUserSignup({...userSignup, e.target.value})
	// }
  return (
	<div>
		{/* Testing div */}
		{/* <div>
			<h1>Sign Up</h1>
			<NavLink to="/login">
				<button className='btn btn-success'>
					Sign Up
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
			style={{ margin: 0, padding: 0, background: 'grey', width: '100%', height: '100vh' }}
			>
			<div>
				<div className="container d-flex justify-content-between p-0" style={{ background: 'white', borderRadius: '10px', width: '90%' }}>
				<div className="left p-3 d-flex flex-column justify-content-center" style={{ width: '450px' }}>
					<h1 style={{ color: 'rgba(0, 0, 0, 0.7)', fontWeight: 200 }}>Create account!</h1>
					<p>Now save your record on cloud</p>
					<form>
					<div className="input-group mb-3">
					{/* <span className="input-group-text" id="basic-addon1">@</span> */}
					<input type="text" className="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1"
					name="name"
					// value={userSignup.name}
					onChange={(e) => {userSignup.name=e.target.value; console.log(userSignup.name)}}
					/>
					</div>
					<div className="input-group mb-3">
					{/* <span className="input-group-text" id="basic-addon1">@</span> */}
					<input type="text" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" 
					onChange={(e) => {userSignup.email=e.target.value; console.log(userSignup.email)}}
					/>
					</div>
					<div className="input-group mb-3">
					{/* <span className="input-group-text" id="basic-addon1">@</span> */}
					<input type="number" className="form-control" placeholder="Phone" aria-label="Username" aria-describedby="basic-addon1" 
					// onChange={(e) => {userSignup.phone=e.target.value; console.log(userSignup.phone)}}
					/>
					</div>
					<div className="input-group mb-3">
					{/* <span className="input-group-text" id="basic-addon1">@</span> */}
					<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" 
					onChange={(e) => {userSignup.password=e.target.value; console.log(userSignup.password)}}
					/>
					</div>
					<div className="mb-3 d-flex justify-content-between">
					<a href="#" style={{ color: '#8c7569' }}>Forget your password?</a>
					<NavLink to="/login"><button type="submit" className="btn btn-primary" style={{ background: '#8c7569', border: 'none' }}
					onClick={(e) => {console.log(userSignup)}}>
						Sign Up
					</button></NavLink>
					</div>
					</form>
					<div className=" d-flex  justify-content-center">
					<p> Already have an account?</p>
					<NavLink to="/login" className="mx-2" style={{ color: '#8c7569' }}>Login now</NavLink>
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

export default Signup