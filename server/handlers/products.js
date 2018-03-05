const Product = require('../models/productModel');

exports.uploadProduct = (req, res) => {
  const product = new Product.model({
    name: req.body.name,
    price: req.body.price,
    desc: req.body.desc,
    category: req.body.desc,
    tag: req.body.tag,
    size: req.body.size,
    productImage: req.file.path
  });

  product.save((err, product) => {
    if (err) res.sendStatus(404);
    res.sendStatus(200);
  });
};

exports.getProducts = (req, res) => {
  Product.model
    .find()
    .exec((err, products) => {
      if (err) res.sendStatus(404);
      res.json(products);
    });
};

exports.removeProduct = (req, res) => {
  Product.model 
    .findByIdAndRemove(req.params.id)
    .exec()
    .then(products => {
      if (!products) return res.sendStatus(404);
      return res.sendStatus(200);
    })
    .catch(err => res.sendStatus(404));
};

exports.updateProduct = (req, res) => {
  let newProduct = {
    name: req.body.name,
    price: req.body.price,
    desc: req.body.desc
  };

  Product.model 
    .findByIdAndUpdate(req.params.id, newProduct, {new: true} )
    .exec((err, product) => {
      if (err) res.sendStatus(404);
      res.sendStatus(200);
    });
};

exports.getSingleProduct = (req, res) => {
  Product.model
    .findById(req.params.id)
    .exec()
    .then(product => {
      if (!product) return res.sendStatus(404);
      return res.json(product);
    });
};