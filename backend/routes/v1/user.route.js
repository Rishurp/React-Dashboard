const express = require("express");
const userController = require("../../controllers/user.controller");
const auth = require("../../middleware/auth");

const router = express.Router();

router.get("/",auth, userController.getUser);

module.exports = router;