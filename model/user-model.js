const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userModel = {};

userModel.schema = new Schema({
  userName: {type: String},
  email: {type: String, required: true},
  password: {type: String, required: true},
  confirmPassword: {type: String, required: true},
});

userModel.model = mongoose.model('User', userModel.schema);

module.exports = userModel;

