import React from 'react';

const Feature = ({ icon, title, description }) => (
  <div className="feature col p-1">
    <div className="shadow p-3 mb-5 bg-body-tertiary rounded">
      <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
        {icon}
      </div>
      <h3 className="fs-4 text-body-emphasis">{title}</h3>
      <p>{description}</p>
      <a href="#" className="icon-link">
        Call to action
        <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
      </a>
    </div>
  </div>
);

const FeaturedSection = () => (
  <div className="w-100 container px-4 py-1" id="featured-3">
    <h2 className="pb-2 border-bottom">Why Choose medCloud?</h2>
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-5 row-cols-md-3">
      <Feature
        icon={<svg className="bi" width="1em" height="1em"><use xlinkHref="#collection"></use></svg>}
        title="Secure & Private"
        description="Your patients' data deserves the best protection..."
      />
      <Feature
        icon={<svg className="bi" width="1em" height="1em"><use xlinkHref="#people-circle"></use></svg>}
        title="Effortless Uploads"
        description="Say goodbye to cumbersome paperwork..."
      />
      <Feature
        icon={<svg className="bi" width="1em" height="1em"><use xlinkHref="#toggles2"></use></svg>}
        title="Access Anywhere"
        description="Whether you're at the office, at home, or on the go..."
      />
      <Feature
        icon={<svg className="bi" width="1em" height="1em"><use xlinkHref="#toggles2"></use></svg>}
        title="Collaboration Made Easy"
        description="Seamlessly share patient data with other healthcare professionals..."
      />
      <Feature
        icon={<svg className="bi" width="1em" height="1em"><use xlinkHref="#toggles2"></use></svg>}
        title="Smart Search"
        description="Our powerful search functionality lets you find specific patient records..."
      />
    </div>
  </div>
);

export default FeaturedSection;
