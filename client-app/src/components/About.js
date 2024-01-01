import React from 'react';
import { NavLink } from 'react-router-dom';
import FeaturedSection from './FeaturedSection';
import GettingStarted from './GettingStarted';
import Navbar from './Navbar2';
// import "./About.css"

const About = () => {
  return (
	<>
	{/* Testing div */}
		{/* <div>
			<h1>About</h1>
			<NavLink to="/">
				<button className='btn btn-success'>
					Home
				</button>
			</NavLink>
		</div> */}
	{/* Main div */}
		<div className="landing-page">
			<Navbar/>
			
			<header className="header">
				<div class="px-4 py-5 my-3 text-center">
					<h1 class="display-5 fw-bold text-body-emphasis mb-3">medCloud : <h2 className='d-inline'>Your Medical Data, Securely Stored</h2></h1>
					<div class="col-lg-6 mx-auto">
					<div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
						<button type="button" class="btn btn-primary btn-lg px-4 gap-3" style={{background:"#c6a153",border:"white"}}>Get started</button>
					</div>
					</div>
				</div>
				<div class="b-example-divider"></div>
			</header>
			<FeaturedSection/>
			<GettingStarted/>
			<div class="px-4 py-5 my-3 text-center">
				<h3 class="fw-bold text-body-emphasis mb-3">Your Patients Deserve the Best:</h3>
				<p>Give your patients peace of mind by securely storing their medical records and reports...</p>
				<h3 class="fw-bold text-body-emphasis mb-3">Join medCloud Today!</h3>
				<p>Sign up now to revolutionize how you manage patient records. Elevate your practice to the next level...</p>
				<div class="col-lg-6 mx-auto">
				<div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
					<button type="button" class="btn btn-primary btn-lg px-4 gap-3" style={{background:"#c6a153",border:"white"}}>Get started</button>
				</div>
				</div>
			</div>
			
			<footer className="footer">
				<p>Disclaimer: medCloud is a platform for secure storage and access to medical records. It is not an appointment booking app.</p>
			</footer>
		</div>
	</>
  )
}

export default About