const Order = require('../models/orderModel');
const User = require('../models/userModel');

exports.getOrders = (req,res) => {
  User.model 
    .findById(req.params.id)
    .exec()
    .then(orders => {
      res.json(orders);
    })
    .catch(err => res.sendStatus(404));
};

exports.createOrder = (req, res) => {
  const newOrder = new Order.model(req.body);
  User.model
    .findById(req.params.id)
    .exec()
    .then(docs => {
      let cart = docs.cart;
      docs.order.push(newOrder);
      docs.save(function(err, docs) {
        if (err) res.sendStatus(404);
        res.json(docs);
      });
    })
    .catch(err => res.sendStatus(404).json(err));
};

exports.deleteOrder = (req, res) => {
  User.model
    .findByIdAndUpdate(req.params.id, {$set: {order: []}}, function(err, docs) {
      if (err) res.sendStatus(404);
      res.json(docs);
    });
};