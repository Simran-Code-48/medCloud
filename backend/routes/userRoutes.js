const express = require("express");
const { registerUser, loginUser, dashboardUser } = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/dashboard",validateToken, dashboardUser);

module.exports = router;