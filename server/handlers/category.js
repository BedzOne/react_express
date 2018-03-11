const Product = require('../models/productModel');

exports.getProducts = (req, res) => {
  Product.model
    .findById()
    .exec((err, products) => {
      if (err) res.sendStatus(404);
      res.json(products);
    });
};