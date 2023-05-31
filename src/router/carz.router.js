const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
var bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../schema/User");
var config = require("../../config");
const { CarzMiddleware } = require("../middleware/carz.middleware");
const {
  getCarzController,
  postCarzController,
} = require("../controller/carz.controller");

router.get("/carz", CarzMiddleware, getCarzController);
router.post("/carz", CarzMiddleware, postCarzController);

module.exports = router;
