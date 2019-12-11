const router = require("express").Router();

const { login, register } = require("../repository/authRepository");

router.post("/login", async (req, res, next) => {
  try {
    const { token, user, error } = await login(req.body);

    if (error) throw error;

    if (token) {
      res.header("Authorization", token).send({ data: { user } });
    }
  } catch (error) {
    res.send({ data: null, error });
  }
});

router.post("/register", async (req, res, next) => {
  try {
    const response = await register(req.body);
    res.send(response);
  } catch (error) {
    res.status(404).send(new Error(error));
  }
});

module.exports = router;
