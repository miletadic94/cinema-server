const router = require("express").Router();

const { getAll, save } = require("../repository/movieRepository");

/* GET users listing. */
router.get("/", async (req, res, next) => {
  const movies = await getAll();
  res.send(movies);
});

router.post("/", async (req, res, next) => {
  try {
    const movie = await save(req.body);
    res.send(movie);
  } catch (error) {
    res.status(error.code).send(error.message);
  }
});

module.exports = router;
