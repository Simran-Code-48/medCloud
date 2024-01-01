import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import Hero from './Hero';
import Features from './Features';
import Footer from './Footer';
import FeaturedSection from './FeaturedSection';
import GettingStarted from './GettingStarted';


const Home = () => {
  return (
	<div>
		{/* Route Testng div */}
		{/* <div>
			<h1>Home</h1>
			<NavLink to="/about">
				<button className='btn btn-success'>
					About
				</button>
			</NavLink>
			<NavLink to="/contact">
				<button className='btn btn-success'>
					Contact
				</button>
			</NavLink>
			<NavLink to="/login">
				<button className='btn btn-success'>
					Log in
				</button>
			</NavLink>
			<NavLink to="/signup">
				<button className='btn btn-success'>
					Sign Up
				</button>
			</NavLink>
		</div> */}
		{/* Main div */}
		<div>
			{/* <Navbar/> */}
			{/* <Navbar/> */}
		</div>
		{/* Top section */}
		<div>
			<Navbar2/>
			<div className="landing-page">
			<header className="header">
				<div class="px-4 py-5 my-3 text-center">
					<h1 class="display-5 fw-bold text-body-emphasis mb-3">medCloud : <h2 className='d-inline'>Securely Store Your Medical Data</h2></h1>
					<div class="col-lg-6 mx-auto">
					<div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
						<NavLink to="/signup"><button type="button" class="btn btn-primary btn-lg px-4 gap-3" style={{background:"#c6a153",border:"white"}}>Get started</button></NavLink>
					</div>
					</div>
				</div>
				<div class="b-example-divider"></div>
			</header>
			<FeaturedSection/>
			<GettingStarted/>
			<div class="px-4 py-5 my-3 text-center">
				<h3 class="fw-bold text-body-emphasis mb-3">Your Patients Deserve the Best:</h3>
				<p className='mb-5'>Give your patients peace of mind by securely storing their medical records and reports...</p>
				<h3 class="fw-bold text-body-emphasis mb-3">Join medCloud Today!</h3>
				<p>Sign up now to revolutionize how you manage patient records. Elevate your practice to the next level...</p>
				<div class="col-lg-6 mx-auto">
				<div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
					<NavLink to="/signup"><button type="button" class="btn btn-primary btn-lg px-4 gap-3" style={{background:"#c6a153",border:"white"}}>Get started</button></NavLink>
				</div>
				</div>
			</div>
		</div>
			{/* <Hero/>
			<Features/> */}
			<Footer/>
		</div>
	</div>
	
  )
}

export default Home