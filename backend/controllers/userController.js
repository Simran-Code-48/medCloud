const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const { use } = require("../routes/recordsRoutes");
//@desc Register the user
//@route POST /medCloud/users/register
//@access public
const registerUser = asyncHandler(async (req,res) => {
	const {username, email, password} = req.body;
	if(!username || !email || !password){
		res.status(400);
		throw new Error("All fiels are manadatory!!!");
	}
	const userExists = await User.findOne({email});//email as object
	if(userExists){
		res.status(400);
		throw new Error("User already exists!!!");
	}
	const hashPassword = await bcrypt.hash(password,10);//10 is solved round
	//console.log("Hashed Password : ",hashPassword);
	const user = await User.create(
		{
			username,
			email,
			password: hashPassword,
		}
	);
	//res.json(`User created ${user}`);
	if(user){
		res.status(201).json({_id: user.id, email: user.email});
	}else{
		res.status(400);
		throw new Error("User data not valid");
	}
});
//@desc login user
//@route POST /medCloud/users/login
//@access public
const loginUser = asyncHandler(async (req,res) => {
	const {email, password} = req.body;
	if(!email || !password){
		res.status(400);
		throw new Error("All fields are manadatory!!!");
	}
	const user = await User.findOne({email});
	if(user && (await bcrypt.compare(password, user.password))){
		const accessToken = jwt.sign(
			{
				user: {
					username: user.username,
					email: user.email,
					id: user.id,
				},
			},
			process.env.ACCESS_TOKEN_SECRET,
			{expiresIn: "600m"}
		);
		res.status(200).json({accessToken});
	}else{
		res.status(401);
		throw new Error("email or password is not valid")
	}
});
// @desc User Profile
// @route POST /medCloud/users/profile
// @access private
const dashboardUser = asyncHandler(async (req,res) => {
	res.json(req.user);
});


module.exports = {registerUser, loginUser, dashboardUser};