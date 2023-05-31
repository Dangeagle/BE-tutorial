const User = require("../schema/User");
const CarzList = require("../schema/ListCarz");
const create_user = (data) => User.create(data);
const create_carz = (data) => CarzList.create(data);
const find_username = (username) => User.findOne({ username: username });
module.exports = {
  create_user,
  find_username,
  create_carz,
};
