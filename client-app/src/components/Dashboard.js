import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './NavbarUser';
import Navbar2 from './NavbarUser';

const Dashboard = () => {
  return (
	<div>
    {/* Testing div */}
    {/* <div>
      <h1>Dashboard</h1>
        <NavLink to="/user">
          <button className='btn btn-success'>
            Home
          </button>
        </NavLink>
    </div> */}
    {/* Main div */}
    <div>
      <Navbar2/>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row align-items-center g-5 py-5">
          <div className="col-12 col-sm-8 col-lg-6 w-50">
            <img
              src={require("../images/doctorprofile.jpg")}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="100%"
              style={{ borderRadius: '50%', border: 'solid silver 10px' }}
              loading="lazy"
            />
          </div>
          <div className="col-lg-6 w-70">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3" style={{alignSelf:"end",color:"#0f3e1a"}}>Profile</h1>
            <hr></hr>
            <div className="d-flex w-100">
              <h4>Name :</h4>
              <p className="mx-3" style={{ fontSize: '20px' }}>
                Person
              </p>
            </div>
            <div className="d-flex">
              <h4>Email :</h4>
              <p className="mx-3" style={{ fontSize: '20px' }}>
                person@gmail.com
              </p>
            </div>
            <div className="d-flex " >
              <h4 >Phone no. :</h4>
              <p className="mx-3" style={{ fontSize: '20px' }}>
                384843478
              </p>
            </div>
            <div className="d-flex w-100" >
              <h4>Expertise :</h4>
              <p className="mx-3" style={{ fontSize: '20px' }}>
                Cardiologist
              </p>
            </div>
            <div className="d-flex">
              <h4>Clinic Address :</h4>
              <p className="mx-3" style={{ fontSize: '20px' }}>
                xyz, Punjab
              </p>
            </div>
            <div className="d-flex">
              <h4>Working days :</h4>
              <p className="mx-3" style={{ fontSize: '20px' }}>
                Mon - Sat
              </p>
            </div>
            <div className="d-flex">
              <h4>Working hours :</h4>
              <p className="mx-3" style={{ fontSize: '20px' }}>
                8:00 a.m. - 4:00 p.m.
              </p>
            </div>
            <button type="button" className="btn btn-success btn-lg px-4 me-md-2" style={{background:"#c6a153",border:"white"}}>
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Dashboard