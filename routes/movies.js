const router = require("express").Router();

const movieService = require("../services/movieService");

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
// const { registerValidation, loginValidation } = require("../validation");

// router.post("/", async (req, res, next) => {
//   try {
//     const movie = await movieService.save(req.body);
//     res.status(200).send(movie);
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// });

// router.put("/", async (req, res, next) => {
//   try {
//     const movie = await movieService.update(req.body);
//     res.status(200).send(movie);
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// });
module.exports = router;
