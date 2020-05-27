const database = require("../database");
const User = require("../models/user");

const fetchAll = async () => {
  try {
    const [rows, fieldData] = await User.fetchAll();
    return rows;
  } catch (error) {
    console.log(error);
  }
};

const save = async (user) => {
  //return await new User(user).save();
};

module.exports = {
  fetchAll,
  save,
};
