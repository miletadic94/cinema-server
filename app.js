const express = require("express");
const cors = require("cors");
const logger = require("morgan");

const dotenv = require("dotenv");
const database = require("./database");

const usersRouter = require("./routes/users");

dotenv.config();

const PORT = process.env.PORT || 8080;

//Connect to DB
const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", usersRouter);

app.listen(PORT, () => {
  console.log("Server running on port ", PORT);
});

module.exports = app;
