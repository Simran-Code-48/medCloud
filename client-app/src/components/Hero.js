import React from 'react'
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
	<>
	{/* <h1 style={{fontSize:"clamp(5px,3vw,40px)"}}>Welcome to medCloud......</h1> */}
	<div className='d-flex justify-content-center ' style={{marginTop:"100px"}}>
	<div className="shadow p-3 mb-5 bg-white rounded" style={{width:"70%"}}>
		<h2 style={{color:"#0f3e1a"}}>Welcome to medCloud</h2>
		<div className='d-flex'>
			<img src={require("../images/doctor.jpg")} style={{width:"50%",height:"100%"}}/>
			<div className='d-flex flex-column justify-content-center align-items-center mx-3'>
				<h4 style={{textAlign:"justify"}}>Want to manage patient records easily?</h4>
				<p style={{textAlign:"justify"}}>Managing and finding physical records is always be tedious task. So why not put them online with medCloud</p>
				<div><NavLink to="/login"><button className='btn btn-success' style={{background:"#c6a153",border:"white"}}>Get started </button></NavLink></div>
			</div>
		</div>
	</div>
	</div>
	</>
  )
}

export default Hero