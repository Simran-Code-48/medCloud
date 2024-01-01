const mongoose = require("mongoose");

const recordSchema = mongoose.Schema(
	{
	//  user_id: {
	// 	type: mongoose.Schema.Types.ObjectId,
	// 	required:true,
	// 	ref: "User",
	//  },
	 name: {
		type: String,
		required: [true, "Please enter the Patient name"],
	 },
	 age: {
		type: Number,
		required: [true, "Please enter the Patient age"],
	 },
	 gender: {
		type: String,
		required: [true, "Please enter the Patient gender"],
	 },
	 condition:{
		type: String,
		required: [true, "Please enter the Patient condition"],
	 },
	//  avatar: {
	// 	type: String
	//  }
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Record", recordSchema);//"Record" is name of schema