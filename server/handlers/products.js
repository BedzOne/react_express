const Product = require('../models/productModel');
const ProductCatalog = require('../models/categoryModel');

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

  ProductCatalog
    .findById(req.params.id)
    .exec()
    .then(docs => {
      docs.products.push(product)
      docs.save(function(err, docs) {
        if (err) res.sendStatus(404);
        res.json(docs);
      });
    })
    .catch(err => res.sendStatus(404));    
};

exports.getProducts = (req, res) => {
  ProductCatalog
    .find()
    .exec((err, products) => {
      if (err) res.sendStatus(404);
      res.json(products);
    });
};

exports.removeProduct = (req, res) => {
  ProductCatalog
    .findById(req.params.id)
    .exec()
    .then(docs => {
      let getIndex = docs.products.some((product, index) => {
        if (product._id == req.params.productId) {
          console.log('match', index);
          return index;
        }
      })

      docs.products.splice(getIndex, 1);
      docs.save(function(err, docs) {
        if (err) res.sendStatus(404);
        res.json(docs);
      });
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