const User = require("../models/User");
const CinemaError = require("../utils/CinemaError");

// FOR BORIS
// Handle SEQUELIZE ERROR WITH STATUS CODE
// DEFAULT ROLE ID

const findAll = async () => {
  try {
    const users = await User.findAll({});

    return users;
  } catch (error) {
    return error;
  }
};

const findById = (id) => {
  return User.findOne({
    where: { id },
  });
};

const findByEmail = (email) => {
  return User.findOne({
    attributes: {
      include: ["password"],
    },
    where: {
      email,
    },
  });
};

const save = async (user) => {
  try {
    const savedUser = await User.create({ ...user, roleId: 2 });
    return savedUser;
  } catch (error) {
    console.log(error);
    throw new CinemaError(400, error.name);
  }
};

const update = (id, data) => {
  return User.update({ ...data }, { returning: true, where: { id } });
};

module.exports = {
  findAll,
  findById,
  findByEmail,
  save,
  update,
};
