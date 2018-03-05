const Cart = require('../models/cartModel');
const Product = require('../models/productModel');
const User = require('../models/userModel');

exports.addToCart = (req, res) => {
  const cartItem = new Cart.model(req.body);
  console.log(cartItem)
  const user = new User.model();
    User.model
      .findById(req.params.id)
      .exec((err, docs) => {
        if (err) res.sendStatus(404);
        let cart = docs.cart;
        let isInCart = cart.some((item) => {
          if (item._id == req.body._id) {
            item.quantity += req.body.quantity;
            item.price += req.body.price;
            return true;
          }
        });
        if (!isInCart) {
          cart.push(cartItem);
        }
        if (cart.length == 0) {
          cart.push(cartItem);
        }

        docs.save(function (err, docs) {
          if (err) return (err);
          res.json(docs);
        });
    });
};

exports.getCartItems = (req, res) => {
  User.model
    .findById(req.params.id)
    .exec((err, docs) => {
      if (err) res.sendStatus(404);
      res.json(docs);
    });
};

exports.updateCartItem = (req, res) => {
  User.model 
    .findById(req.params.id )
    .exec((err, docs) => {
      if (err) res.sendStatus(404);
      let cart = docs.cart;
      cart.filter((item) => {
        console.log(item._id, req.body._id);
        if (item._id == req.body._id) {
          item.quantity += req.body.quantity;
          item.price += req.body.price;
        }
      });

      // if (isInCart) {
      //   console.log(cart.length)
      // } 
      docs.save(function (err, docs) {
        if (err) return (err);
        res.sendStatus(200).json(docs);
      });
    });
};

exports.deleteCartItem = (req, res) => {
  User.model  
    .findById(req.params.id)  
    .exec()
    .then(docs => { 
      let cart = docs.cart;
      console.log(docs)
      let index = cart.findIndex(item => {
        return item._id == req.query.itmId;
      });
      cart.splice(index, 1)

      docs.save(function (err, docs) {
        if (err) return (err);
        res.sendStatus(200);
      });
    })
    .catch(err => res.sendStatus(404));
};