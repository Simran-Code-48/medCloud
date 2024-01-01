import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const Patientcard = (props) => {
  console.log("in card");
  //console.log(props);
  console.log(props.data);
  const {name,gender,age,condition} = props.data;
  //  const addCard = props.data?.map( () => {
  //   return (
  //     <>
  //       <div className="card w-100 mb-2">
  //           <div className="card-body">
  //             <ul className=" d-flex justify-content-between">
  //               <li className="list-group-item card-title">{data.name}</li>
  //               <li className="list-group-item">Gender</li>
  //               <li className="list-group-item">{data.age}</li>
  //               <li className="list-group-item">{data.condition}</li>
  //               <a href="#" className="btn btn-outline-secondary">Details</a>
  //             </ul>
  //         </div>
  //       </div>
  //     </>
  //   );
  //  })
  //   return (
  //     <div className="card w-100 mb-2">
  //       <div className="card-body">
  //         <ul className=" d-flex justify-content-between">
  //           <li className="list-group-item card-title">data.name</li>
  //           <li className="list-group-item">data.age</li>
  //           <li className="list-group-item">data.age</li>
  //           <li className="list-group-item">data.condition</li>
  //           <a href="#" className="btn btn-outline-secondary">Details</a>
  //         </ul>
  //     </div>
  //   </div>
  //   )
  // })

  return (
	<div className="card w-100 mb-2">
      <div className="card-body">
        <ul className=" d-flex justify-content-between flex-wrap">
          <li className="list-group-item mx-2 card-title">{name}</li>
          <li className="list-group-item mx-2">{gender}</li>
		      <li className="list-group-item mx-2">{age}</li>
          <li className="list-group-item mx-2">{condition}</li>
          <button className="btn btn-outline-secondary mx-2">Details</button>
          <button className='btn btn-danger fw-bold mx-2'>X</button>
        </ul>
    </div>
  </div>
  )
}

export default Patientcard