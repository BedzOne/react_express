const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const product = require('./productModel');

const cartItem = {};

cartItem.schema = product.schema;

cartItem.model = mongoose.model('cartItem', cartItem.schema);

module.exports = cartItem;

