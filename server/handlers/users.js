const jwt = require('jsonwebtoken');
const exjwt = require('jwt-express');
const bcrypt = require('bcrypt');

const User = require('../models/userModel');

exports.registerUser = (req, res) => {
  let user = new User.model(req.body);
  if(user.email) {
    User.model
      .find({email: user.email})
      .exec()
      .then(docs => {
        if (!docs.length) { 
          if (user.password !== user.confirmPassword) {
            return res.status(404).json('passwords do not match');
          }
          user.save(function (err, user) {
            if (err) return (err);
          });
          console.log('user saved');
          res.sendStatus(200); 
        } else {
          res.status(404).json('user exists');
        }      
      })
      .catch(err => res.sendStatus(404).json(res.body));
    } else {
      res.status(404).json('user name required');
    }
};

exports.getUsers = (req, res) => {
  User.model
    .find()
    .exec(function(err, users) {
      if (err) throw err;
      res.json(users);
    });
};

exports.updateUser = (req, res) => {
  let newUser = req.body;

  User.model
    .findByIdAndUpdate(req.params.userId, newUser, {new: true})
    .exec()
    .then(user => {
      user.save(function (err, user) {
        if (err) return (err);
      });
      console.log('user updated');
      res.json(newUser);
    })
    .catch(err => res.send(500, { error: err }));
};

exports.deleteUser = (req, res) => {
  User.model
    .findByIdAndRemove(req.params.userId)
    .exec()
    .then(users => {
      if (!users) return res.sendStatus(404).end();
      return res.sendStatus(200).end();
    })
    .catch(err => next(err));
};

exports.loginUser = (req, res) => {
  let user = {
    email: req.body.email,
    password: req.body.password
  };
  User.model
    .find({email: user.email})
    .exec()
    .then(users => {
      if (!users.length) { 
        res.status(401).json({
          message: "Auth failed - user does not exist"
        });
      } else {
        bcrypt
        .compare(req.body.password, users[0].password)
        .then(result=> {
          if (result) {
            const token = 
              jwt
                .sign({ email: users[0].email, id: users[0]._id },
                'secretKey', { expiresIn: "1h"});
            res.status(200).json({
              message: "Auth success - logged in",
              token,
              users
            });
          } else {
            res.json('not working');
          }
        })
        .catch(err => res.status(401).json({message: "Auth failed"}));
      }     
    });
};

exports.getUser = (User) => {

return function(req, res) {
  User.model  
    .findById(req.params.id)
    .exec()
    .then(user => {
      res.json(user);
    })
    .catch(err => res.sendStatus(404));
  };
};