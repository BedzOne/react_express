const CartItem = require('../models/cartItemModel');

exports.addToCart = (req, res) => {
  const cartItem = new CartItem.model(req.body);
  CartItem.model
    .findById(req.params.id)
    .exec()
    .then(cartItem => {
      cartItem.save(function(err, cartItem) {
        if (err) return (err);
      });
    })
    .catch(err = res.sendStatus(404));
};

exports.getCartItems = (req, res) => {
  CartItem.model
    .find()
    .exec((err, docs) => {
      if (err) res.sendStatus(404);
      res.json(docs);
    });
};