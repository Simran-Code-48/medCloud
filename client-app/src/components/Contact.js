import React from 'react';
import { NavLink } from 'react-router-dom';

const Contact = () => {
  return (
	<div>
		<h1>Contact</h1>
		<NavLink to="/">
			<button className='btn btn-success'>
				Home
			</button>
		</NavLink>
	</div>
  )
}

export default Contact