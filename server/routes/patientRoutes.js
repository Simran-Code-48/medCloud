const express = require('express');
const router = express.Router();
const { getPatientsList, addPatient, getPatientDetail, updatePatientDetail, deletePatientDetail } = require("../logic/patientLogic");

// router.route("/").get(getPatientsList);
// router.route("/").post(addPatient);
// router.route("/:id").get(getPatientDetail);
// router.route("/:id").put(updatePatientDetail);
// router.route("/:id").delete(deletePatientDetail);
//instead
router.route("/").get(getPatientsList).post(addPatient);
router.route("/:id").get(getPatientDetail).put(updatePatientDetail).delete(deletePatientDetail);

module.exports = router;