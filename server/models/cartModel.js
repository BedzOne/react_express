const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const product = require('./productModel');

const cart = {};

cart.schema = new Schema({
  name: {type: String},
  price: {type: Number},
  desc: {type: String},
  category: {type: String},
  tag: {type: String},
  size: {type: String},
  productImage: {type: String},
  quantity: {type: Number},
});

cart.model = mongoose.model('Cart', cart.schema);

module.exports = cart;