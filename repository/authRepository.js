const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {
  loginValidation,
  registerValidation
} = require("../validation/auth.validation");

const User = require("../model/User");
const CinemaError = require("../utils/CinemaError");

const login = async ({ username, password }) => {
  try {
    const { error } = loginValidation({ username, password });
    if (error) throw new CinemaError(400, error.message);

    const user = await User.findOne({ username });
    if (!user) throw new CinemaError(400, "User doesnt exist!");

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) throw new CinemaError(400, "Bad credentials");

    const token = jwt.sign(
      { _id: user.id, username },
      process.env.TOKEN_SECRET
    );

    return { token, user };
  } catch (error) {
    throw error;
  }
};

const register = async ({ username, email, password }) => {
  try {
    const { error } = registerValidation({ username, email, password });
    if (error) throw new CinemaError(400, error.message);

    const userExists = await User.findOne({ username });
    if (userExists) throw new CinemaError(400, "User already exists!");

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const user = await new User({
      username,
      email,
      password: hashPassword,
      role: 0,
      active: true
    }).save();

    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  login,
  register
};
