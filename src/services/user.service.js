const bcrypt = require("bcryptjs");
const userRepository = require("../repository/user.repository");
const {
  saveUserValidation,
  updateUserValidation,
} = require("../validation/user.validation");
const CinemaError = require("../utils/CinemaError");

const fetchAll = async () => {
  try {
    const users = await userRepository.findAll();
    if (!users) throw new CinemaError(404, "Users Not Found");
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
    return error;
  }
};

const findByEmail = async (email) => {
  try {
    const user = await userRepository.findByEmail(email);
    return user;
  } catch (error) {
    return error;
  }
};

const save = async (data) => {
  try {
    //Validation
    const { error } = saveUserValidation(data);
    if (error) throw new CinemaError(400, error.details[0].message);

    //Check email exist
    const emailExist = await findByEmail(data.email);
    if (!!emailExist) throw new CinemaError(400, "Email already exist!");

    //Hash passwords
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(data.password, salt);

    //Creating user
    const user = await userRepository.save({
      ...data,
      password,
      roleId: 0,
      dateOfBirth: new Date(data.dateOfBirth),
    });

    return { user };
  } catch (error) {
    return error;
  }
};

const update = async (id, data) => {
  try {
    //Validation
    const { error } = updateUserValidation(data);
    if (error) throw new CinemaError(400, error.details[0].message);

    const user = await userRepository.findById(id);
    await user.update({ ...data });
    return { data: user };
  } catch (error) {
    return error;
  }
};

module.exports = {
  fetchAll,
  findByEmail,
  findById,
  save,
  update,
};
