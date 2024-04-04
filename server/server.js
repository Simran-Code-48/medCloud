/* Method 
1. import express module , dotenv module
2. Declare port in .env file and take it through dotenv process module
3. make a app and listen at port
4. calling different methods*/
const express = require('express');
const errorhandler = require('./middleware/errorhandler');
const dotenv = require('dotenv').config();

const port = process.env.PORT || 5001;

const app = express();
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
//handling routes
// app.get("/user/patients", (req, res) => {
// 	res.status(200).json({message :"Patient's list"});
// });
//instead using middleware
app.use(express.json());//express middleware to parse request
app.use("/user/patients", require('./routes/patientRoutes'));
app.use(errorhandler);