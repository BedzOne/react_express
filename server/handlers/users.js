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
            res.status(200).json(user)
          });
          console.log('user saved'); 
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
  let newUser = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
  }

  User.model
    .findByIdAndUpdate(req.params.userId, newUser, {new:true})
    .exec()
    .then(user => {
      console.log(user)
      bcrypt
      .compare(req.body.password, user.password)
      .then(result => {
        if (result) {
          user.save(function (err, user) {
            if (err) return (err);
          });
        } else {
          res.status(404).json('wrong password');
        }
      })
    })
    .catch(err => res.sendStatus(404));
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
      console.log(users)
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

exports.getSingleUser = (req, res) => {
    User.model  
      .findById(req.params.userId)
      .exec()
      .then(user => {
        res.json(user);
      })
      .catch(err => res.sendStatus(404));
};

exports.changeUserPassword = (req, res) => {
  let newPassword = {
    password: req.body.password,
    newPassword: req.body.newPassword,
    confirmPassword: req.body.confirmPassword
  }

  User.model  
    .findById(req.params.userId)
    .exec()
    .then(users => {
      res.json(users)
      users.password = req.body.newPassword
      users.save(function(err) {
        if (err) console.log(err)
      })
    })
    .catch(err => res.sendStatus(404))
};

exports.changeAddress = (req, res) => {
  let addressDelivery = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    company: req.body.company,
    address: req.body.address,
    city: req.body.city,
    postCode: req.body.postCode,
    countyState: req.body.countyState,
    country: req.body.country,
  };

  User.model  
    .findById(req.params.userId)
    .exec()
    .then(user => {
      res.json(user);
      user.addressDelivery.push(addressDelivery);

      user.save(function(err) {
        if (err) console.log(err)
      })
      
    })
    .catch(err => res.sendStatus(404))
}