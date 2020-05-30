const router = require("express").Router();

const userService = require("../services/userService");

router.post("/login", async (req, res, next) => {
  try {
    const response = await userService.login(req.body);
    res.send(response);
  } catch (error) {
    console.log(error);
    res.status(error.code).send(error);
  }
});

router.post("/register", async (req, res, next) => {
  try {
    const response = await userService.register(req.body);
    res.send(response);
  } catch (error) {
    res.status(error.code).send(error);
  }
});

module.exports = router;
