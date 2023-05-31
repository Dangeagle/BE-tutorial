const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
var bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../schema/User");
var config = require("../../config");
const {
  register,
  RegisterMiddleware,
  LoginMiddleware,
} = require("../middleware/authen.middleware");
const {
  RegisterController,
  LoginController,
} = require("../controller/authen.controller");

router.post("/signup", RegisterMiddleware, RegisterController);
router.post("/login", LoginMiddleware, LoginController);

module.exports = router;
