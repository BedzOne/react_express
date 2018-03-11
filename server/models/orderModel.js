const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cart = require('./cartModel')

const order = {};

order.schema = new Schema({
  order: [{type: cart.schema}],
  total: {type: String},
  status: {type: String}
}, {timestamps: {createdAt: 'createdAt'}});

order.model = mongoose.model('Order', order.schema);

module.exports = order;