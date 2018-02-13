const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');

const users = require('./routes/users');
const db = require('./config');
const port = 5000;

db.mongoConnect();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
  res.setHeader('Access-Control-Allow-Headers', 'Content-type, Authorization');
  next();
});

//apply express middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));
app.use(cors());

//routes

app.use('/user', users);

app.listen(port, () => console.log(`server running on port ${port}...`));