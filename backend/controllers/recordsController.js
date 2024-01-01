//controllers means giving logic for each api request , response
//suggestion : give labels to api methods

const Record = require("../models/recordsModel");
const asyncHandler = require("express-async-handler");

//@desc Get all records
//@route GET /api/records
//@access private
const getRecords = asyncHandler(async (req,res) => {//listen to '/api/medCloud' and call callback function
	const record = await Record.find();//({ user_id: req.user.id});
	res.status(200).json(record);//for json format
});

//@desc Get record with id = id
//@route GET /api/records/id
//@access private
const getRecord = asyncHandler(async (req,res) => {//whenever we use mongodb , it return promises , so we use async handler
	const record = await Record.findById(req.params.id);
	if(!record){
		res.status(404);
		throw new Error("Record not found")
	}
	// if(record.user_id.toString() !== req.user.id){
	// 	res.status(403);
	// 	throw new Error("User don't have permission to get another user record");
	// }
	res.status(200).json(record);
});

//@desc Create record
//@route POST /api/records
//@access private
const createRecord = asyncHandler(async (req,res) => {//listen to '/api/medCloud' and call callback function
	console.log("The request body is ",req.body);//gives body is undefined, so we need a middleware (check server.js) to parse the body, we use middleware provideded by express
	//error handling for empty body
	const {name, age, gender, condition} = req.body;// destructing body
	console.log("name:",name,"age:",age,"gender",gender,"condition",condition)
	if(!name || !age || !gender || !condition){
		console.log(400);
		res.status(400);
		throw new Error("All fields are manadatory!!!");//is in the html format, to make it json, we use middleware (check errorHandler.js) which accept req, res and convert to json
	}
	try {
		const record = await Record.create({
		  name,
		  age,
		  gender,
		  condition
		});
		
		console.log("object", record);
		res.status(201).json(record);//for json format
		// rest of the code...
	  } catch (error) {
		console.error("Error creating record:", error);
		// Handle the error appropriately, such as returning an error response.
		res.status(500).json({ error: "Failed to create record." });
	  }
	});	  
// 	const record = await Record.create(
// 		{
// 			name,
// 			age,
// 			gender,
// 			condition
// 			//user_id: req.user.id,
// 		}
		
// 	);
// 	console.log("object",record);
// 	// if(req.file){
// 	// 	record.avatar = req.file.path;
// 	// }
// 	res.status(201).json(record);//for json format
// });

//@desc Create record with image
//@route POST /medCloud/records/image
//@access private
const createRecordWithImage = (req,res,next) => {
	//res.status(202).json({message : "Connected"});
	res.status(202);
	const record = req.body;
	 console.log(record);
	 res.json(record);
	res.end();
	// const {name, age, gender} = req.body;// destructing body
	// if(!name || !age || !gender){
	// 	res.status(400);
	// 	throw new Error("All fields are manadatory!!!");//is in the html format, to make it json, we use middleware (check errorHandler.js) which accept req, res and convert to json
	// }
	// const record =  Record.create(
	// 	{
	// 		name,
	// 		age,
	// 		gender,
	// 		user_id: req.user.id,
	// 	}
	// );
	// res.status(201).json(record);
	// const record = new Record({
	// 	user_id: req.user.id,
	// 	name: req.body.name,
	// 	age: req.body.age,
	// 	gender: req.body.gender
	// });
	// record.save()
	// .then(response => {
	// 	res.json({message: "saved"});
	// })
	// .catch(error => {
	// 	res.json({message: "not saved"});
	// })
};
	//console.log("The request body is ",req.body);//gives body is undefined, so we need a middleware (check server.js) to parse the body, we use middleware provideded by express
	//error handling for empty body
			// const {name, age, gender} = req.body;// destructing body
			// if(!name || !age || !gender){
			// 	res.status(400);
			// 	throw new Error("All fields are manadatory!!!");//is in the html format, to make it json, we use middleware (check errorHandler.js) which accept req, res and convert to json
			// }
			// const record = Record.create({
			// 	name: req.body.name,
			// 	age: req.body.age,
			// 	gender: req.body.gender,
			// 	user_id: req.user.id,
			// });
			// if(req.file){
			// 	record.avatar = req.file.path
			// }
			// record.save()
			// .then(response => {
			// 	res.json({
			// 		message: 'created successfully'
			// 	})
			// })
			// .catch(error => {
			// 	res.json({
			// 		message: 'An error occured'
			// 	})
			// });
	// const record = await Record.create(
	// 	{
	// 		name,
	// 		age,
	// 		gender,
	// 		user_id: req.user.id,
	// 	}
	// );
	// if(req.file){
	// 	record.avatar = req.file.path;
	// }
	//res.status(201).json(record);//for json format
//};

//@desc Update record for id = id
//@route PUT /api/records/id
//@access private
const updateRecord = asyncHandler(async (req,res) => {//listen to '/api/medCloud' and call callback function
	const record = await Record.findById(req.params.id);
	if(!record){
		res.status(404);
		throw new Error("Record not found")
	}
	if(record.user_id.toString() !== req.user.id){
		res.status(403);
		throw new Error("User don't have permission to update another user record");
	}
	const updatedRecord = await Record.findByIdAndUpdate(
		req.params.id,
		req.body,
		{new :true}
	)
	res.status(200).json(updatedRecord);//for json format
});

//@desc Delete record for id = id
//@route DELETE /api/records/id
//@access private
const deleteRecord = asyncHandler(async (req,res) => {//listen to '/api/medCloud' and call callback function
	const record = await Record.findById(req.params.id);
	if(!record){
		res.status(404);
		throw new Error("Record not found")
	}
	if(record.user_id.toString() !== req.user.id){
		res.status(403);
		throw new Error("User don't have permission to delete another user record");
	}
	await Record.deleteOne({_id: req.params.id});
	res.status(200).json(record);//for json format
});

module.exports = {getRecords, getRecord, createRecord, createRecordWithImage, updateRecord, deleteRecord};