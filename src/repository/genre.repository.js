const Genre = require("../models/Genre");

const findAll = () => {
  return Genre.findAll();
};

const findById = (id) => {
  return Genre.findOne({
    where: { id },
  });
};

const findByName = (name) => {
  return Genre.findOne({
    where: {
      name,
    },
  });
};

const save = (genre) => {
  return Genre.create(genre);
};

const update = (id, genre) => {
  return Genre.update({ ...genre }, { returning: true, where: { id } });
};

module.exports = {
  findAll,
  findById,
  findByName,
  save,
  update,
};
