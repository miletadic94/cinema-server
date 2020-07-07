const router = require("express").Router();
const syncDb = require("../utils/db-sync");

router.post("/syncdb", async (req, res, next) => {
  try {
    await syncDb(false);
    res.status(200).send("Success");
  } catch (error) {
    console.log(error);
    res.status(error.code).send(error.message);
  }
});

module.exports = router;
