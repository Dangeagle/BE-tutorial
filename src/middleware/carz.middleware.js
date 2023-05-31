const User = require("../schema/User");
var bcrypt = require("bcryptjs");

const CarzMiddleware = async (req, res, next) => {
  const { authorization } = await req.headers;
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  if (!authorization) return res.status(400).send("unauthorized");
  let splitToken = authorization.split(" ");
  let token = await splitToken[1];
  next();
};

module.exports = { CarzMiddleware };
