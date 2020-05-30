const router = require("express").Router();
const userService = require("../services/user.service");

router.get("/", async (req, res) => {
  try {
    const response = await userService.fetchAll();
    res.send(response);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const response = await userService.findById(req.params.id);
    res.send(response);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
