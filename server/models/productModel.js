const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const product = {};

product.schema = new Schema({
  name: {type: String},
  price: {type: Number},
  desc: {type: String},
  tag: {type: String},
  size: {type: String},
  productImage: {type: String},
  quantity: {type: Number}
});

product.model = mongoose.model('Product', product.schema);

module.exports = product;