import React from 'react'
import "./Component_css/Table.css"
const data = [
	{ name: "Anom", age: 19, gender: "Male" , phone:"1297788388"},
    { name: "Megha", age: 19, gender: "Female", phone:"1297788388" },
    { name: "Subham", age: 25, gender: "Male" , phone:"1297788388"},
]
const Table = () => {
  return (
	<div className='table_container'>
		<div style={{display:'flex', justifyContent:"space-between", alignItems:'center'}}>
			<h3 style={{margin:"10px 10px", color:"var(--color-gray)"}}>
        Appointments</h3>
			<button className='viewall' style={{marginRight:20}}>View all</button>
		</div>
		<div className='table_container2'> 
		<table >
		<tr>
			<th>Name</th>
			<th>Age</th>
			<th>Gender</th>
			<th>Phone No.</th>
			<th></th>
		</tr>
		{data.map( (val, key) => {
			return (
				<>
				<hr/>
				<tr key={key}>
					<td>{val.name}</td>
					<td>{val.age}</td>
					<td>{val.gender}</td>
					<td>{val.phone}</td>
					<td><button className='viewall' style={{background:"none"}}>Details</button></td>
				</tr>
				</>
			)
		})}
	</table>
	</div>
	</div>
  )
}

export default Table
