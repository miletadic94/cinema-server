const router = require("express").Router();
const userService = require("../services/user.service");

router.get("/", async (req, res) => {
  try {
    const response = await userService.fetchAll();
    res.send(response);
  } catch (error) {
    res.status(error.code).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const response = await userService.findById(req.params.id);
    res.send(response);
  } catch (error) {
    res.status(error.code).send(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const response = await userService.save(req.body);
    res.send(response);
  } catch (error) {
    console.log("+>", error);
    res.status(error.code).send(error.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const response = await userService.update(req.params.id, req.body);
    res.send(response);
  } catch (error) {
    res.status(error.code).send(error.message);
  }
});

module.exports = router;
