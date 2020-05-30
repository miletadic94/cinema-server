const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userRepository = require("../repository/user.repository");
const CinemaError = require("../utils/CinemaError");
const {} = require("../validation/auth.validation");

const fetchAll = async () => {
  try {
    const users = await userRepository.findAll();
    if (!users) throw new CinemaError(404, "User Not Found");
    return users;
  } catch (error) {
    throw error;
  }
};

const findById = async (id) => {
  try {
    const user = await userRepository.findById(id);
    if (!user) throw new CinemaError(404, "User Not Found");

    return user;
  } catch (error) {
    throw error;
  }
};

const findByEmail = async (email) => {
  try {
    const user = await userRepository.findByEmail(email);
    return user;
  } catch (error) {
    throw error;
  }
};

const save = async (data) => {
  try {
    return userRepository.save(data);
  } catch (error) {
    throw error;
  }
};

const update = async (body) => {
  try {
    //let updatedMovie = {};
    let user = await userRepository.findById(body.id);

    //TODO: Validation
    return userRepository.update(user);
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
