import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
// import logo from '../images/logo.jpg'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
	<nav className="navbar navbar-expand-lg " style={{background:"#B8FEE4"}}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
			{/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="30"
            fill="currentColor"
            className="bi bi-cloud"
            viewBox="0 0 16 16"
          >
            <path
              d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"
            /></svg> */}
            <div className='d-flex align-items-start'>
            <img src={require("../images/cloud-computing (1).png")} className='mx-2' height="42px" style={{alignSelf:"start"}}></img>
            <h2 className='Navbar-logo' style={{alignSelf:"end"}}>medCloud</h2>
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
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/contact"
                >Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/login"
                >
                  {/* <button className="btn btn-outline-success" type="submit"> */}
                  Login
                {/* </button> */}
                </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/signup"
                >
                  {/* <button className="btn btn-success" type="submit"> */}
                  Sign Up
                {/* </button> */}
                </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar