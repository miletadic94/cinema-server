const express = require("express");
const cors = require("cors");
const logger = require("morgan");

const dotenv = require("dotenv");

dotenv.config();

const syncRouter = require("./routes/syncDb");
const authRouter = require("./routes/auth");
const usersRouter = require("./routes/users");
const moviesRouter = require("./routes/movies");
const actorsRouter = require("./routes/actors");
const genresRouter = require("./routes/genres");
const uploadRouter = require("./routes/upload");

const PORT = process.env.PORT || 8080;

//Connect to DB
const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(authRouter);
app.use("/sync", syncRouter);
app.use("/users", usersRouter);
app.use("/movies", moviesRouter);
app.use("/actors", actorsRouter);
app.use("/genres", genresRouter);
app.use("/upload", uploadRouter);

app.listen(PORT, () => {
  console.log("Server running on port ", PORT);
});

module.exports = app;
