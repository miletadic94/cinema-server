const router = require("express").Router();
const genreService = require("../services/genre.service");

router.get("/", async (req, res) => {
  try {
    const response = await genreService.fetchAll();
    res.send(response);
  } catch (error) {
    res.status(error.code).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const response = await genreService.findById(req.params.id);
    res.send(response);
  } catch (error) {
    res.status(error.code).send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const response = await genreService.save(req.body);
    res.send(response);
  } catch (error) {
    res.status(error.code).send(error);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const response = await genreService.update(req.params.id, req.body);
    res.send(response);
  } catch (error) {
    res.status(error.code).send(error);
  }
});

module.exports = router;
