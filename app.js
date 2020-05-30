const express = require("express");
const cors = require("cors");
const logger = require("morgan");

const dotenv = require("dotenv");

dotenv.config();

const syncRouter = require("./routes/syncDb");
const authRouter = require("./routes/auth");
const movieRouter = require("./routes/movies");
const userRouter = require("./routes/users");

const PORT = process.env.PORT || 8080;

//Connect to DB
const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(authRouter);
app.use("/sync", syncRouter);
app.use("/movies", movieRouter);
app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log("Server running on port ", PORT);
});

module.exports = app;
