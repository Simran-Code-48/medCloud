import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './NavbarUser';
import Navbar2 from './NavbarUser';
import Welcome from './Welcome';
import Usage from './Usage';
import Features from './Features copy';
import Footer from './Footer'
import GettingStarted from './GettingStarted';

const User = () => {
  return (
	<div>
		{/* Testing div */}
		{/* <div>
			<h1>User</h1>
			<NavLink to="/user/recent">
				<button className='btn btn-success'>
					Patients
				</button>
			</NavLink>
			<NavLink to="/user/view">
				<button className='btn btn-success'>
					Details
				</button>
			</NavLink>
			<NavLink to="/user/dashboard">
				<button className='btn btn-success'>
					Profile
				</button>
			</NavLink>
			<NavLink to="/">
				<button className='btn btn-secondary'>
					Log out
				</button>
			</NavLink>
		</div> */}
		{/* Main div */}
		<div>
			{/* <Navbar/> */}
			<Navbar2/>
			<div className='d-flex justify-content-center'>
				<div className='w-90' style={{flexGrow:0.9}}>
					 <Welcome/>
					 <Usage/>
					 <GettingStarted/>
					 <Footer/>
				</div>
			</div>
		</div>
	</div>
  )
}

export default User