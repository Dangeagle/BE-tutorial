const { find_username } = require("../service/authen.service");
const User = require("../schema/User");
var bcrypt = require("bcryptjs");

const RegisterMiddleware = async (req, res, next) => {
  const { username, password } = req.body;

  const foundUser = await find_username(username);
  if (!username || !password || password.length < 8) {
    res.status(400);
    return res.send("Invalid details!");
  } else if (foundUser) {
    res.status(400);
    res.send("already registered");
  } else next();
};

const LoginMiddleware = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const foundUser = await find_username(username);
    if (!username || !password) {
      return res.status(400).json({ message: "Enter Username or Password" });
    } else if (foundUser) {
      const isValidPass = await bcrypt.compare(password, foundUser.password);
      if (!isValidPass) {
        return res
          .status(400)
          .json({ message: "invalid username or password" });
      } else {
        res.status(200);
        next();
      }
    } else {
      return res.status(400).json({ message: "invalid username or password" });
    }
  } catch (error) {
    return res.status(500).json({ message: "dwqd" });
  }
};

module.exports = { RegisterMiddleware, LoginMiddleware };
