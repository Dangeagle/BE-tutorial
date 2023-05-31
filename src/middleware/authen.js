const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
var bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../schema/User");
var config = require("../../config");
var dbUrl = config.dbUrl;

const users = [];

router.post("/signup", async (req, res) => {
  console.log(req.body);

  if (!req.body.username || !req.body.password) {
    res.status("400");
    return res.send("Invalid details!");
  }
  const foundUser = users.find((user) => user.username === req.body.username);
  if (foundUser) {
    return res.send("user already exists");
  }

  const newUser = { username: req.body.username, password: req.body.password };

  const salt = await bcrypt.genSalt(10);
  User.username = newUser.username;
  User.password = await bcrypt.hash(newUser.password, salt);
  User.save();

  users.push(newUser);
  console.log(users);
  return res.send({
    status: res.statusCode,
    data: users,
  });
});

router.post("/login", function (req, res) {
  const { username, password } = req.body;
  User.findOne({
    username,
  }).then((result) => {
    if (!username || !password || !bcrypt.compare(password, result.password)) {
      return res
        .status(401)
        .json({ message: "Authentication failed. Invalid user or password." });
    } else {
      return res.json({
        token: jwt.sign(
          { username: User.username, password: User.password },
          "RESTFULAPIs"
        ),
      });
    }
  });
});

module.exports = router;
