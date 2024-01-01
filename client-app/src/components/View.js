import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './NavbarUser';
import Navbar2 from './NavbarUser2';

const View = () => {
  return (
    <div>
      {/* Testing div */}
      <div>
        <h1>View</h1>
        <NavLink to="/user">
          <button className='btn btn-success'>
            Home
          </button>
        </NavLink>
      </div>
      {/* Main div */}
      <div>
        <Navbar2/>
      </div>
    </div>
  )
}

export default View