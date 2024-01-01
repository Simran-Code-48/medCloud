import { NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import Form from './Form';
import PatientList from './PatientList';
import Navbar from './NavbarUser';
import api from "../api/records";
import axios from 'axios';
import Navbar2 from './NavbarUser';

const Recent = () => {
	const [records, setRecords] = useState([]);
	

	//  records = [
	// 	{
	// 	id:"1",
	// 	name:"patient1",
	// 	gender:"male",
	// 	age:30,
	// 	condition:"Diabetes"
	// 	},
	// 	{
	// 	id:"2",
	// 	name:"patient2",
	// 	gender:"male",
	// 	age:25,
	// 	condition:"Diabetes"
	// 	},
	// 	{
	// 	id:"3",
	// 	name:"patient3",
	// 	gender:"male",
	// 	age:40,
	// 	condition:"Diabetes"
	// 	},
	// 	{
	// 	id:"4",
	// 	name:"patient4",
	// 	gender:"male",
	// 	age:50,
	// 	condition:"Diabetes"
	// 	},
	// 	{
	// 	id:"5",
	// 	name:"patient5",
	// 	gender:"male",
	// 	age:70,
	// 	condition:"Diabetes"
	// 	}
	//  ];

	const retrieveRecords = async () => {
		const response = await api.get("/records");// api.get("/records");
		return response.data;
	}

	 const addPatientHandler = async (record) => {
		console.log(record);

		const request = {
			
			...record
		}
		 const response = await api.post("/records", request);
		console.log(response);
		 // setRecords([...records, record]);
		setRecords([...records, response.data]);
	}

	useEffect(() => {
		const getAllRecords = async () => {
			const allRecords = await retrieveRecords();
			if(allRecords) setRecords(allRecords);
		}

		getAllRecords();
	},[])


  return (
	<div>
		{/* Testing div */}
		{/* <div>
			<h1>Operations Section</h1>
			<NavLink to="/user">
				<button className='btn btn-success'>
					Home
				</button>
			</NavLink>
		</div> */}
		{/* Main div */}
		<div>
			<div>
				<Navbar2/>
				<Form addPatientHandler={addPatientHandler}/>
				<PatientList data={records}/>
				{/* <Form/> */}
				{/* <AddRecord/> */}
				{/* records : property of recent list, record is passing argument*/}
				{/* <Recent data={record}/> */}
			</div>
		</div>
	</div>
  )
}

export default Recent