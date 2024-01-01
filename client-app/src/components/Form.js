import React from 'react';

class Form extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			age:"",
			gender:"",
			condition:"",
		}
		
	  }
	
	  handleName(e) {
		this.setState({name:e.target.value}, () => {
		  console.log(this.state.name); // Updated value here
		});
	  }
	  handleAge(e) {
		this.setState({age:e.target.value}, () => {
		  console.log(this.state.age); // Updated value here
		});
	  }
	  handleGender(e) {
		this.setState({gender:e.target.value}, () => {
		  console.log(this.state.gender); // Updated value here
		});
	  }
	  handleCondition(e) {
		this.setState({condition:e.target.value}, () => {
		  console.log(this.state.condition); // Updated value here
		});
	  }
	  handleSubmit(e) {
		e.preventDefault();
		if(this.state.name === "" || this.state.age === "" || this.state.gender === "" || this.state.condition === "" ){
			alert("All fields are manadatory");
			return ;
		}
		this.props.addPatientHandler(this.state);
		// console.log(this.state);
	  }
	render(){
		return (
			// e.preventDefault(); console.log(this.state);style={{color:"#0f3e1a"}}
			<div className='mt-5' style={{display:"flex", flexDirection:"column", alignItems:"center",width:"100%"}}>
				<form className="row g-3" style={{width:"90%"}} onSubmit={(e)=>{this.handleSubmit(e)}}>
					<h2 className="" style={{color:'#0f3e1a', alignSelf:'start',  fontFamily:"sans-serif"}}>Patient Record </h2>
					<hr className='mt-0 ' ></hr>
					<div className="col-12">
						<div className="input-group mb-3">
							<span className="input-group-text" id="inputGroup">
								Name
							</span>
							<input
								type="text"
								className="form-control"
								aria-label="Sizing example input"
								aria-describedby="inputGroup-sizing"
								placeholder="Enter the name"
								value={this.state.name}
								onChange={(e)=>{this.handleName(e)}}
								/>
						</div>
					</div>
					<div className="col-md-6">
						<div className="input-group mb-3">
						<span className="input-group-text" id="inputGroup">
							Age
						</span>
						<input
							type="text"
							className="form-control"
							aria-label="Sizing example input"
							aria-describedby="inputGroup-sizing"
							placeholder="Enter the age"
							value={this.state.age}
							onChange={(e)=>{this.handleAge(e)}}
						/>
						</div>
					</div>
					<div className="col-md-6">
						<div className="mb-3">
							<div className="row g-3 align-items-center">
								<div className="col-auto">
								<label for="inputPassword6" className="col-form-label">
									Gender
								</label>
								</div>
								<div className="col-auto">
									<div className="form-check form-check-inline">
										<input
										className="form-check-input"
										type="radio"
										name="inlineRadioOptions"
										id="inlineRadio1"
										value="Male"
										onChange={(e)=>{this.handleGender(e)}}
										/>
										<label className="form-check-label" for="inlineRadio1">
											Male
										</label>
									</div>
									<div className="form-check form-check-inline">
										<input
										className="form-check-input"
										type="radio"
										name="inlineRadioOptions"
										id="inlineRadio1"
										value="Female"
										onChange={(e)=>{this.handleGender(e)}}
										/>
										<label className="form-check-label" for="inlineRadio1">
											Female
										</label>
									</div>
									<div className="form-check form-check-inline">
										<input
										className="form-check-input"
										type="radio"
										name="inlineRadioOptions"
										id="inlineRadio1"
										value="Others"
										onChange={(e)=>{this.handleGender(e)}}
										/>
										<label className="form-check-label" for="inlineRadio1">
											Others
										</label>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="input-group mb-3">
							<span className="input-group-text" id="inputGroup">
								Condition
							</span>
							<input
								type="text"
								className="form-control"
								aria-label="Sizing example input"
								aria-describedby="inputGroup-sizing"
								placeholder="e.g. Diabetes"
								value={this.state.condition}
								onChange={(e)=>{this.handleCondition(e)}}
							/>
						</div>
					</div>
					<label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
						Prescription
					</label>
					<div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
						<div className="text-center">
							{/* <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" /> */}
							<div className="mt-4 flex text-sm leading-6 text-gray-600">
								<label
								htmlFor="file-upload"
								className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
								>
									<span>Upload a file</span>
									<input id="file-upload" name="file-upload" type="file" className="sr-only" />
								</label>
								<p className="pl-1">
									or drag and drop
								</p>
							</div>
							<p className="text-xs leading-5 text-gray-600">
								PNG, JPG, GIF up to 10MB
							</p>
						</div>
					</div>
					

					<div className="col-12">
						<button type="submit" className="btn btn-success mr-3" style={{background:"#c6a153",border:"white"}}>
							Save
						</button>
						<button type="submit" className="btn btn-outline-secondary mx-3">
							Cancel
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default Form