const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "upload/");//location where file will be saved
	},
	filename: () => {
		let ext = path.extname(file.orginalname);
		cb(null, Date.now() + ext);
	}
});

const upload = multer ({
	storage:storage,
	fileFilter: (req,file,callback) => {
		if(file.mimetype == "image/png" || file.mimetype == "image/jpg"){
			callback(null,true);
		}else{
			console.log("only jpg & png file supported");
			callback(null,false);
		}
	},
	limits: {
		fileSize: 1024 * 1024 *2
	}
});

module.exports = upload;