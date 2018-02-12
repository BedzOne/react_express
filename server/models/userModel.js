const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const userModel = {};

userModel.schema = new Schema({
  userName: {type: String},
  email: {type: String, required: true},
  password: {type: String, required: true},
  confirmPassword: {type: String, required: true},
});

userModel.schema.pre('save', function(next) {
  let user = this;
  bcrypt.hash(user.password, 10, function(err, hash) {
    if (err) {
      return next(err);
    } else {
      user.password = hash;
      user.confirmPassword = hash;
      next();
    }
  });
});

userModel.model = mongoose.model('User', userModel.schema);

module.exports = userModel;

