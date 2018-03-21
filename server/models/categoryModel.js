const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const product = require('./productModel');

const category = {};

category.schema = new Schema({
  categoryName: {type: String},
  products: [product.schema]
})

let ProductCatalog = mongoose.model('Category', category.schema);

module.exports = ProductCatalog;