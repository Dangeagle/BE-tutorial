const jwt = require("jsonwebtoken");
const User = require("../schema/User");
var bcrypt = require("bcryptjs");
const { create_user } = require("../service/authen.service");

const RegisterController = async (req, res) => {
  const { username, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(password, salt);
  const newUser = {
    username: username,
    password: passwordHash,
  };
  const createUser = await create_user(newUser);
  const respones = createUser.toObject();
  console.log(typeof respones);
  return res.send({
    status: res.statusCode,
    data: {
      ...respones,
      // test: "alo",
    },
  });
};

const LoginController = (req, res) => {
  console.log(User);
  return res.json({
    token: jwt.sign(
      { username: User.username, password: User.password },
      "RESTFULAPIs"
    ),
  });
};
module.exports = { RegisterController, LoginController };
