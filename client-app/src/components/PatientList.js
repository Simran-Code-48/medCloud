import React from 'react';
import Patientcard from './Patientcard';

const PatientList = (props) => {//props default parameter

  console.log(props.data);
  //lets render list with record (props as parameter) as argument
  const addToList = props.data?.map((record) => {
    //console.log(record);
    return (<Patientcard data={record}/>)// name={record.name} age={record.age} condition={record.condition}/>)
  })
  // const addCard = props.data?.map( (data) => {
  //   return (
  //     <>
  //       <div className="card w-100 mb-2">
  //           <div className="card-body">
  //             <ul className=" d-flex justify-content-between">
  //               <li className="list-group-item card-title">{data.name}</li>
  //               <li className="list-group-item">{data.gender}</li>
  //               <li className="list-group-item">{data.age}</li>
  //               <li className="list-group-item">{data.condition}</li>
  //               <a href="#" className="btn btn-outline-secondary">Details</a>
  //             </ul>
  //         </div>
  //       </div>
  //     </>
  //   );
  //  })
  
  return (
    <div className="mt-5" style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
    <div style={{width:"90%"}}>
      <h2  style={{color:'#0f3e1a', alignSelf:'start',  fontFamily:"sans-serif"}}>Patient's List </h2>
      <hr className='my-0 ' ></hr>
      <div className="d-flex flex-column align-items-center">
        <form className="d-flex col-10 my-4">
          <input className="form-control form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
        </form>
          <div className="card w-100 mb-2">
      <div className="card-body card-header ">
        <ul className="d-flex justify-content-between flex-wrap">
          <li className="list-group-item card-title fw-bold mx-2">Name</li>
          <li className="list-group-item fw-bold mx-2 ">Gender</li>
		      <li className="list-group-item fw-bold mx-2">Age</li>
          <li className="list-group-item fw-bold mx-2">Condition</li>
          <button className="btn btn-outline-secondary fw-bold mx-2" disabled>Action</button>
          <button className='btn btn-danger fw-bold mx-2' disabled>X</button>
        </ul>
    </div>
    </div>
    {/* {addCard} */}
    {addToList}
      {/* {addCard} */}
          {/* <Patientcard/>
          <Patientcard/>
          <Patientcard/>
          <Patientcard/>
          <Patientcard/>
          <Patientcard/>
          <Patientcard/>
          <Patientcard/> */}
      </div>
    </div>
		
	</div>
  )
  
}

export default PatientList