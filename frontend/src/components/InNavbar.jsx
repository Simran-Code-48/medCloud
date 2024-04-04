import React, { useState } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './Component_css/Navbar.css';
import logoImage from '../images/logo.jpg';
const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  const menuItems1 = [
    { path: '/user/dashboard', label: 'Dashboard' },
    { path: '/user/appointments', label: 'Appointments' },
    { path: '/user/patients', label: 'Patients' },
    { path: '/', label: 'Log out' },
    { path: '/user/profile', label: <span className="material-symbols-rounded profile">person</span>}
  ];
  const menuItems = [
    { path: '/user/dashboard', label: 'Dashboard' },
    { path: '/user/appointments', label: 'Appointments' },
    { path: '/user/patients', label: 'Patients' },
    { path: '/', label: 'Log out' },
    { path: '/user/profile', label: 'Profile', active: true },
  ];
  return (
    <header>
      <div className='navbar'>
          <div className='logo' >
            <NavLink to='/' style={{display:'flex', alignItems:'center', gap:'1rem'}}>
              <img src={logoImage} height="35" alt='logo'></img>
              <h2 style={{ fontFamily: 'Pacifico', fontSize: "1.5rem" }}>
                <span style={{ color: "var(--color-gray)" }}>med</span>
                <span style={{ color: "var(--color-green)" }}>Cloud</span>
              </h2>
            </NavLink>
          </div>

          <ul className='links'>
          {menuItems1.map((item, index) => (
          <li key={index}>
            <NavLink to={item.path}>
              {item.label}
            </NavLink>
          </li>
        ))}
            {/* <li><NavLink to='/user/dashboard'>Dashboard</NavLink></li>
            <li><NavLink to='/user/appointments'>Appoinments</NavLink></li>
            <li><NavLink to='/user/patients'>Patients</NavLink></li>
            <li><NavLink to='/' >Log out</NavLink></li>
            <li>
              <NavLink to='/user/profile'  >
                <span className="material-symbols-rounded profile">
                  person
                </span>
              </NavLink> 
            </li>*/}
          </ul>
          {/* <NavLink className='action_btn' to='/'>Log In</NavLink> */}

          <div className='toggle_btn' onClick={handleToggle}>
            <span className="material-symbols-rounded">
              {isOpen ? 'close' : 'menu'}
            </span>
          </div>

          <ul className={`dropdown_menu ${isOpen ? 'open' : ''}`}>
          {menuItems.map((item, index) => (
          <li key={index}>
            <NavLink to={item.path} className={item.active ? 'active_btn' : ''}>
              {item.label}
            </NavLink>
          </li>
        ))}
          </ul>
      </div>
    </header>
  );
}

export default Navbar1;
