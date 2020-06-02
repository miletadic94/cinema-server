const router = require("express").Router();
const actorService = require("../services/actor.service");

router.get("/", async (req, res) => {
  try {
    const response = await actorService.fetchAll();
    res.send(response);
  } catch (error) {
    res.status(error.code).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const response = await actorService.findById(req.params.id);
    res.send(response);
  } catch (error) {
    res.status(error.code).send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const response = await actorService.save(req.body);
    res.send(response);
  } catch (error) {
    res.status(error.code).send(error);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const response = await actorService.update(req.params.id, req.body);
    res.send(response);
  } catch (error) {
    res.status(error.code).send(error);
  }
});

module.exports = router;
