const Product = require('../models/productModel');
const ProductCatalog = require('../models/categoryModel');

exports.getCategories = (req, res) => {
  ProductCatalog
  .find()
  .exec((err, products) => {
    if (err) res.sendStatus(404);
    res.json(products);
  });
};


exports.createCategory = (req, res) => {
  const productCatalog = new ProductCatalog({
    categoryName: req.body.categoryName
  });

  ProductCatalog
    .find({categoryName: productCatalog.categoryName})
    .exec()
    .then(docs => {
      if (!docs.length) {
        productCatalog.save(function (err, productCatalog) {
          if (err) res.json('error')
          res.sendStatus(200);
        })
      } else {
        res.status(404).json('category exists');
      }
    })
    .catch(err => res.json('error catch'))
}

exports.getSingleCategory = (req, res) => {
  ProductCatalog
    .findById(req.params.id)
    .exec((err, category) => {
      if (err) res.sendStatus(404);
      res.json(category)
    })
};