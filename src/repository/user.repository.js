const User = require("../models/User");

const findAll = () => {
  return User.findAll({
    attributes: { exclude: ["updatedAt", "createdAt", "password"] },
  });
};

const findById = (id) => {
  return User.findOne({
    where: { id },
  });
};

const findByEmail = (email) => {
  return User.findOne({
    where: {
      email,
    },
  });
};

const save = (user) => {};

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
