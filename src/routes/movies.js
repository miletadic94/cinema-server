const router = require("express").Router();
const movieService = require("../services/movie.service");

router.get("/", async (req, res) => {
  try {
    const response = await movieService.fetchAll(req.query.title);
    res.send(response);
  } catch (error) {
    res.status(error.code).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const response = await movieService.findById(req.params.id);
    res.send(response);
  } catch (error) {
    res.status(error.code).send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const response = await movieService.save(req.body, req.file);
    res.send(response);
  } catch (error) {
    res.status(error.code).send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const response = await movieService.update(req.params.id, req.body);
    res.send(response);
  } catch (error) {
    res.status(error.code).send(error);
  }
});

module.exports = router;
