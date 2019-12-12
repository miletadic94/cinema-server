const router = require("express").Router();

const { login, register } = require("../repository/authRepository");

router.post("/login", async (req, res, next) => {
  try {
    const { user, token } = await login(req.body);
    if (token) {
      res.header("Authorization", token).send({ user, token });
    }
  } catch (error) {
    res.status(error.code).send(error.message);
  }
});

router.post("/register", async (req, res, next) => {
  try {
    const response = await register(req.body);
    res.send(response);
  } catch (error) {
    res.status(error.code).send(error.message);
  }
});

module.exports = router;
