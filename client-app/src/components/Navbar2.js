import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
// import logo from '../images/logo.jpg'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
	<nav className="navbar navbar-dark navbar-expand-lg " style={{boxShadow:"0 0 8px 0"}}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
            <div className='d-flex align-items-start'>
            <img src={require("../images/logo.png")} className='mx-2' height="42px" style={{alignSelf:"start"}}></img>
            <h2 className='Navbar-logo' style={{alignSelf:"end",color:"#0f3e1a"}}>medCloud</h2>
            </div>
			{/* <img src={logo} style={{height:40, marginLeft:20}}></img> */}
		</a>
        {/* <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-success" type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
              />
            </svg>
          </button>
        </form> */}
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img src={require('../images/menu.png')}/>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <NavLink className="nav-link active" aria-current="page" to="/" style={{color:"#0f3e1a"}}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/about" style={{color:"#0f3e1a"}}>About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/contact" style={{color:"#0f3e1a"}}>Contact</NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link active" aria-current="page" to="/login"
                 style={{color:"#0f3e1a"}}>
                  {/* <button className="btn btn-outline-success" type="submit"> */}
                  Login
                {/* </button> */}
                </NavLink>
            </li>
            <li className="nav-item">
              <button className='btn btn-success py-0 px-2' style={{background:"#c6a153",border:"white"}}>
                <NavLink className="nav-link active" aria-current="page" to="/signup"
                  style={{color:"white"}}>
                    {/* <button className="btn btn-success" type="submit"> */}
                    Sign Up
                  {/* </button> */}
                  </NavLink>
                </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar