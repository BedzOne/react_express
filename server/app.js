const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const cors = require('cors')
mongoose.Promise = global.Promise;

const User = require('../model/user-model');

const db = mongoose.connection;
const port = 5000;

mongoose.connect('mongodb://localhost:27017/react_express');
db.once('open', () => console.log('mongo running')).on('error', console.error.bind(console, 'connection error:'));

app.use(bodyParser.json());
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/users', (req,res) => {
  User.model.find({}).exec(function(err, users) {
    if (err) throw err;
    res.json(users);
  })

});

app.post('/users', cors(), (req, res, next) => {
  let user = new User.model(req.body);
  if(user.userName) {
    User.model.find({userName: user.userName}, function(err, docs) {
      if (!docs.length) { 
        next();
        console.log('user saved');
        user.save(function (err, user) {
          if (err) return (err);
        });
      } else {
        next(new Error('user exists'));
        return false; 
      }     
    });
    res.json(user);
  } 
  else {
    console.log('user name required')
  } 
});

app.listen(port, () => console.log(`server running on port ${port}...`));