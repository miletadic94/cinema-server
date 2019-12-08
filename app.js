const express = require('express');
const cors = require('cors');
const logger = require('morgan');

const dotenv = require('dotenv')
const mongoose = require('mongoose');

const authRouter = require('./controllers/auth');
const usersRouter = require('./controllers/users');

dotenv.config();

const PORT = process.env.PORT || 8080;

//Connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
  console.log('Connected to db!');
});

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//routes
app.use('/', authRouter);
app.use('/user', usersRouter);


app.listen(PORT, () =>{
  console.log('Server running on port ', PORT)
})

module.exports = app;