const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const cart = require('./cartModel');
const order = require('./orderModel');

const userModel = {};

const address = {};

address.schema = new Schema({
  firstName: {type: String},
  lastName: {type: String},
  company: {type: String},
  address: {type: String},
  city: {type: String},
  postCode: {type: String},
  countyState: {type: String},
  country: {type: String},
});

var emailValidate = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

var passwordValidate = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})');


userModel.schema = new Schema({
  firstName: {type: String},
  lastName: {type: String},
  email: {type: String, required: true, match: emailValidate},
  password: {type: String, required: true, match: passwordValidate},
  confirmPassword: {type: String, required: true},
  addressDelivery: [address.schema],
  addressBilling: [address.schema],
  phone: {type: Number},
  cart: [cart.schema],
  order: [order.schema],
}, {timestamps: {createdAt: 'createdAt'} });

userModel.schema.pre('save', function(next) {
  let user = this;
  if(!user.isModified("password")) return next();

  bcrypt.hash(user.password, 10)
    .then(hash => {
      user.password = hash;
      user.confirmPassword = hash;
      next();
    })
    .catch(err => res.sendStatus(404));
});

userModel.model = mongoose.model('User', userModel.schema);

module.exports = userModel;

