const express = require("express");
const cors = require("cors");
const logger = require("morgan");

const dotenv = require("dotenv");

dotenv.config();

const SyncRouter = require("./routes/syncDb");
const MovieRouter = require("./routes/movies");

const PORT = process.env.PORT || 8080;

//Connect to DB
const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/sync", SyncRouter);
app.use("/movies", MovieRouter);

app.listen(PORT, () => {
  console.log("Server running on port ", PORT);
});

module.exports = app;
