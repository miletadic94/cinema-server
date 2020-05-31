const User = require("../models/User");

const findAll = () => {
  return User.findAll({});
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

const save = (user) => {
  return User.create(user);
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
