import React from 'react'

const Footer = () => {
  return (
	<div  className='d-flex justify-content-center' style={{background:"black"}}>
		<div className="container "style={{width:"90%"}}>
      <footer className="py-5">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5 style={{color:'white'}}>Services</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0" style={{color:'white'}}>Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 " style={{color:'white'}}>Storage Plans</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 " style={{color:'white'}}>Security</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 " style={{color:'white'}}>Features</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 " style={{color:'white'}}>Contact Us</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5 style={{color:'white'}}>About</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 " style={{color:'white'}}>Company</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 " style={{color:'white'}}>Team</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 " style={{color:'white'}}>Privacy Policy</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 " style={{color:'white'}}>Terms of Service</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 " style={{color:'white'}}>FAQs</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5 style={{color:'white'}}>Support</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 " style={{color:'white'}}>Help Center</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 " style={{color:'white'}}>Tutorials</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 " style={{color:'white'}}>Contact Support</a></li>
            </ul>
          </div>

          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5 style={{color:'white'}}>Subscribe to our newsletter</h5>
              <p style={{color:'white'}}>Get updates on new features, promotions, and more.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                <button className="btn btn-primary" type="button" style={{background:"#c6a153",border:"white"}}>Subscribe</button>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p style={{color:'white'}}>© {new Date().getFullYear()} MyStorage, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#twitter"></use></svg></a></li>
            <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#instagram"></use></svg></a></li>
            <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#facebook"></use></svg></a></li>
          </ul>
        </div>
      </footer>
    </div>
	</div>
  )
}

export default Footer