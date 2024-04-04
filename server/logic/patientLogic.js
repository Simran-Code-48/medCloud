//@desc get Patient's List
//@route GET /user/patients
//access public
const getPatientsList = (req, res) => {
	res.status(200).json({ message :"Patient's list" });
};

//@desc Add Patient Details
//@route POST /user/patients
//access public
const addPatient = (req, res) => {
	console.log("Request body : ",req.body);
	//request body is undefined, we need a body parser, express has json middleware
	//in server.js , app.use(express.json())
	const { name, age, gender, phone } = req.body;
	if(!name || !age || !gender || !phone){
		res.status(400);
		throw new Error("Please Enter all the details!!!");
	}
	res.status(200).json({ message :"Add Patient Details" });
};

//@desc get Patient {id} Details
//@route GET /user/patients/:id
//access public
const getPatientDetail = (req, res) => {
	res.status(200).json({ message :`Patient ${req.params.id} Details` });
};

//@desc update Patient {id} Details
//@route PUT /user/patients/:id
//access public
const updatePatientDetail = (req, res) => {
	res.status(200).json({ message :`Update Patient ${req.params.id} Details` });
};

//@desc delete Patient {id} Details
//@route DELETE /user/patients/:id
//access public
const deletePatientDetail = (req, res) => {
	res.status(200).json({ message :`Delete Patient ${req.params.id} Details` });
};

module.exports = { getPatientsList, addPatient, getPatientDetail, updatePatientDetail, deletePatientDetail };