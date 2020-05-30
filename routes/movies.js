const router = require("express").Router();

const movieService = require("../services/movie.service");

/* GET movies listing. */
router.get("/", async (req, res, next) => {
  try {
    const movies = await movieService.fetchAll();
    res.status(200).send(movies);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const movie = await movieService.findById(req.params.id);
    res.status(200).send(movie);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
module.exports = router;
