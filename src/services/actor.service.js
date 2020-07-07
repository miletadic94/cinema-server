const actorRepository = require("../repository/actor.repository");
const {
  createActorValidation,
  updateActorValidation,
} = require("../validation/actors.validation");
const CinemaError = require("../utils/CinemaError");

const fetchAll = async () => {
  try {
    const actors = await actorRepository.findAll();
    if (!actors) throw new CinemaError(404, "Actors Not Found");
    return actors;
  } catch (error) {
    throw error;
  }
};

const findById = async (id) => {
  try {
    const actor = await actorRepository.findById(id);
    if (!actor) throw new CinemaError(404, "Actor Not Found");

    return actor;
  } catch (error) {
    throw error;
  }
};

const save = async (data) => {
  try {
    //Validation
    const { error } = createActorValidation(data);
    if (error) throw new CinemaError(400, error.details[0].message);

    const actor = await actorRepository.save(data);
    return { actor };
  } catch (error) {
    throw error;
  }
};

const update = async (id, data) => {
  try {
    //Validation
    const { error } = updateActorValidation(data);
    if (error) throw new CinemaError(400, error.details[0].message);

    const actor = await actorRepository.findById(id);
    await actor.update({ ...data });
    return { data: actor };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  fetchAll,
  findById,
  save,
  update,
};
