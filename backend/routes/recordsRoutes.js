const express = require("express");
const router = express.Router();
const {getRecords, getRecord, createRecord,createRecordWithImage, updateRecord, deleteRecord} = require("../controllers/recordsController");
const validateToken = require("../middleware/validateTokenHandler");
//const upload = require("../middleware/upload");
//router.use(validateToken);
router.route('/').get(getRecords).post(createRecord);
router.route('/:id').get(getRecord).put(updateRecord).delete(deleteRecord);
//router.post('/',upload.single())
router.route("/image").post(createRecordWithImage);

module.exports = router;