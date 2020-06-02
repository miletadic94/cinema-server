const Actor = require("../models/Actor");

const findAll = () => {
  return Actor.findAll();
};

const findById = (id) => {
  return Actor.findOne({
    where: { id },
  });
};

const save = (actor) => {
  return Actor.create(actor);
};

const update = (id, actor) => {
  return Actor.update({ ...actor }, { returning: true, where: { id } });
};

module.exports = {
  findAll,
  findById,
  save,
  update,
};
