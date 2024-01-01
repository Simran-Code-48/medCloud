import React from 'react'

const Features = () => {
  return (
	<div className='d-flex justify-content-center'>
<div className="container px-4 py-5 " id="featured-3" style={{width:"90%"}}>
      <h2 className="pb-2 border-bottom">Our Features</h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3 w-100 d-flex justify-content-around">
        <div className="feature col shadow p-3 mb-5 bg-white rounded mx-2" style={{width:"30%"}}>
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            <svg className="bi" width="1em" height="1em">
              <use xlinkHref="#collection"></use>
            </svg>
          </div>
          <h3 className="fs-3 mb-4 text-body-emphasis">Accessibility</h3>
          <p>
            Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.
          </p>
          <a href="#" className="icon-link" style={{color:"grey"}}>
            Call to action
            <svg className="bi">
              <use xlinkHref="#chevron-right"></use>
            </svg>
          </a>
        </div>
        <div className="feature col shadow p-3 mb-5 bg-white rounded mx-2" style={{width:"30%"}}>
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            <svg className="bi" width="1em" height="1em">
              <use xlinkHref="#people-circle"></use>
            </svg>
          </div>
          <h3 className="fs-3 mb-4 text-body-emphasis">Speed and Performance</h3>
          <p>
            Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.
          </p>
          <a href="#" className="icon-link" style={{color:"grey"}}>
            Call to action
            <svg className="bi">
              <use xlinkHref="#chevron-right"></use>
            </svg>
          </a>
        </div>
        <div className="feature col shadow p-3 mb-5 bg-white roundedmx-2" style={{width:"30%"}}>
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            <svg className="bi" width="1em" height="1em">
              <use xlinkHref="#toggles2"></use>
            </svg>
          </div>
          <h3 className="fs-3 mb-4 text-body-emphasis">Enhanced Security</h3>
          <p>
            Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.
          </p>
          <a href="#" className="icon-link" style={{color:"grey"}}>
            Call to action
            <svg className="bi">
              <use xlinkHref="#chevron-right"></use>
            </svg>
          </a>
        </div>
      </div>
    </div>
	</div>
  )
}

export default Features