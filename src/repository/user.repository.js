const User = require("../models/User");

const findAll = () => {
  return User.findAll();
};

const findById = (id) => {
  return User.findByPk(id);
};

const findByEmail = (email) => {
  return User.findOne({
    where: {
      email,
    },
  });
};

const save = (user) => {
  return User.create(user);
};

const update = (user) => {
  return User.update(user);
};

module.exports = {
  findAll,
  findById,
  findByEmail,
  save,
  update,
};
