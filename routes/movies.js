const router = require("express").Router();

const MovieRepository = require("../repository/MovieRepository");

/* GET movies listing. */
router.get("/", async (req, res, next) => {
  try {
    const movies = await MovieRepository.findAll();
    res.status(200).send(movies);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
