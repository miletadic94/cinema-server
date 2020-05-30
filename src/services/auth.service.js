const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userRepository = require("../repository/user.repository");
const CinemaError = require("../utils/CinemaError");
const {
  loginValidation,
  registerValidation,
} = require("../validation/auth.validation");

const login = async (data) => {
  try {
    //Validation
    const { error } = loginValidation(data);
    if (error) throw new CinemaError(400, error.details[0].message);

    //Check email exist
    const user = await userRepository.findByEmail(data.email);
    if (!user) throw new CinemaError(400, "Email doesnt exist!");

    const validPass = await bcrypt.compare(data.password, user.password);
    if (!validPass) throw new CinemaError(400, "Wrong Credentials!");

    console.log("process.env.TOKEN_SECRET", process.env.TOKEN_SECRET);
    const token = jwt.sign(
      { _id: user.id, email: user.email },
      process.env.TOKEN_SECRET
    );

    console.log("token", token);
    return {
      token,
      user,
    };
  } catch (error) {
    throw error;
  }
};

const register = async (data) => {
  try {
    //Validation
    const { error } = registerValidation(data);
    if (error) throw new CinemaError(400, error.details[0].message);

    //Check email exist
    const emailExist = await userRepository.findByEmail(data.email);
    if (!!emailExist) throw new CinemaError(400, "Email already exist!");

    //Hash passwords
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(data.password, salt);

    //Creating user
    const user = await userRepository.save({
      ...data,
      password,
      dateOfBirth: new Date(data.dateOfBirth),
    });
    return { user };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  login,
  register,
};
