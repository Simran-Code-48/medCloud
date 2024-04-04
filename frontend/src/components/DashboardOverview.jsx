import { React, useState } from "react";
import "./Component_css/card.css";

const DashboardOverview = () => {
	const [patients, setPatients] = useState(20);
	const [appointments, setAppointments] = useState(40);
	const [records, setRecords] = useState(100);
  return (
	<div className='card_container' >
		<button className='card' onClick={ () => setPatients(patients+1)}>
			<div className="left">
				<span class="material-symbols-rounded" style={{background:"var(--color-card-red)", color:"white"}}>
				recent_patient
				</span>
				<h4>Patients</h4>
			</div>
			<div className="right">
				<h3>{patients}</h3>
				<button>View all</button>
			</div>
			
		</button>

		<button className='card' onClick={ () => setAppointments(appointments+1)}>
			<div className="left">
				<span class="material-symbols-rounded" style={{background:"var(--color-card-green)", color:"white", alignSelf:"left"}}>
				event_available
				</span>
				<h4>Appointments</h4>
			</div>
			<div className="right">
				<h3>{appointments}</h3>
				<button>View all</button>
			</div>
			
		</button>

		<button className='card' onClick={ () => setRecords(records+1)}>
			<div className="left">
				<span class="material-symbols-rounded" style={{background:"var(--color-card-blue)", color:"white"}}>
				receipt_long
				</span>
				<h4>Records</h4>
			</div>
			<div className="right">
				<h3>{records}</h3>
				<button>View all</button>
			</div>
			
		</button>
	</div>
  )
}

export default DashboardOverview