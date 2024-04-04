import React from 'react'
import "./Component_css/Table.css"
const data = [
	{ name: "Anom", age: 19, gender: "Male" , disease:"Fever"},
    { name: "Megha", age: 19, gender: "Female", disease:"Cough" },
    { name: "Subham", age: 25, gender: "Male" , disease:"Malaria"},
]
const RecentFollowups = () => {
  return (
	<div className='table_container'>
		<div style={{display:'flex', justifyContent:"space-between", alignItems:'center'}}>
			<h3 style={{margin:"10px 10px", color:"var(--color-gray)"}}>Recent Follow Ups</h3>
			<button className='viewall' style={{marginRight:20}}>View all</button>
		</div>
		<div className='table_container2'>
		<table>
		<tr>
			<th>Name</th>
			<th>Age</th>
			<th>Gender</th>
			<th>Disease</th>
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
					<td>{val.disease}</td>
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

export default RecentFollowups
