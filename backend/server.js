const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");
const dotenv = require("dotenv").config();//The config() function reads the .env file and sets the environment variables defined in it into the process.env object.

connectDB();
const app = express();//creating instance of express app and saving to app const

const port = process.env.PORT || 5000;//process is a global object that provides information and control over the current Node.js process. It is a core module and does not require any additional dependencies to use. The process object contains various properties and methods that allow you to interact with the current process, access environment variables, and perform other system-related tasks.

//app.use(middleware) to use middleware
app.use(express.json());//using middleware which will provide parser
app.use("/medCloud/records", require("./routes/recordsRoutes"));
// app.get('/api/medCloud',(req,res) => {//listen to '/api/medCloud' and call callback function
// 	// res.send("Get all records");			//string format
// 	res.status(200).json({"message":"Get all records"});//for json format
// });
app.use("/medCloud/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port, () => {//in this we used higher order function as listen and callback function () => , when port event occurs it calls callback function
	console.log(`Server running on PORT ${port}`)
})