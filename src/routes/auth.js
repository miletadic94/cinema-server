const router = require("express").Router();

const authService = require("../services/auth.service.js");

router.post("/login", async (req, res, next) => {
  try {
    const response = await authService.login(req.body);
    res.send(response);
  } catch (error) {
    console.log("error", error);
    res.status(error.code).send(error);
  }
});

router.post("/register", async (req, res, next) => {
  try {
    const response = await authService.register(req.body);
    res.send(response);
  } catch (error) {
    res.status(error.code).send(error);
  }
});

module.exports = router;
