const { Op } = require("sequelize");
const Actor = require("../models/Actor");

const findAll = () => {
  return Actor.findAll();
};

const findById = (id) => {
  return Actor.findOne({
    where: { id },
  });
};

const findAllByIds = async (ids) => {
  try {
    const genres = await Actor.findAll({
      where: {
        [Op.or]: ids.map((id) => ({ id })),
      },
    });
    return genres;
  } catch (error) {
    return error;
  }
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
  findAllByIds,
  save,
  update,
};
