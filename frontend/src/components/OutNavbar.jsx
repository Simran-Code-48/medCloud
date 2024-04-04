import React, { useState } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './Component_css/Navbar.css';
import logoImage from '../images/logo.jpg';
const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

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
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/'>About</NavLink></li>
            <li><NavLink to='/'>Contact</NavLink></li>
            <li><NavLink to='/login'>Log in</NavLink></li>
            <li><NavLink to='/signup' className='active_btn'>Sign up</NavLink></li>
            
          </ul>
          {/* <NavLink className='action_btn' to='/'>Log In</NavLink> */}

          <div className='toggle_btn' onClick={handleToggle}>
            <span className="material-symbols-rounded">
              {isOpen ? 'close' : 'menu'}
            </span>
          </div>

          <ul className={`dropdown_menu ${isOpen ? 'open' : ''}`}>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/'>About</NavLink></li>
            <li><NavLink to='/'>Contact</NavLink></li>
            <li><NavLink to='/login'>Log in</NavLink></li>
            <li><NavLink to='/signup' className='active_btn'>Sign up</NavLink></li>
          </ul>
      </div>
    </header>
  );
}

export default Navbar1;
