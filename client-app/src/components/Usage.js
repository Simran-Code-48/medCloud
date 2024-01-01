import React from 'react'
import { NavLink } from 'react-router-dom'

const Usage = () => {
  return (
	<>
		<div className="container my-4">
		<div className="row">
			

			<div className="col-md-6 col-xl-6 col-sm-12">
			<div className="card bg-c-green order-card p-3">
				<div className="card-block">
				<h6 className="m-b-20">Patients</h6>
				<h2 className="text-right">
					<i className="fa fa-rocket f-left"></i>
					<span>250</span>
				</h2>
				<NavLink to="/user/recent"><button className='btn btn-success'>Search</button></NavLink>
				</div>
			</div>
			</div>

			<div className="col-md-6 col-xl-6 col-sm-12">
			<div className="card bg-c-yellow order-card p-3">
				<div className="card-block">
				<h6 className="m-b-20">Records</h6>
				<h2 className="text-right">
					<i className="fa fa-refresh f-left"></i>
					<span>486</span>
				</h2>
				<NavLink to="/user/recent"><button className='btn btn-success'>Search</button></NavLink>
				</div>
			</div>
			</div>

			
		</div>
		</div>
	</>
  )
}

export default Usage