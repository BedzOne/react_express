const mongodb = require('mongodb');
const mongoose = require('mongoose');
const multer = require('multer');

mongoose.Promise = global.Promise;
const db = mongoose.connection;

exports.port = process.env.PORT || 5000;

exports.mongoConnect = () => {
  mongoose.connect('mongodb://localhost:27017/react_express');
  db.once('open', () => console.log('mongo running')).on('error', console.error.bind(console, 'connection error:'));
};

// config for multer file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  }
});

// const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
//     ? 'sk_live_csIybjuDYgzIlURn289tzujX'
//     : 'sk_test_UWIsNHr6wUEPsMB6UqARDXaA';

const STRIPE_SECRET_KEY = 'sk_test_UWIsNHr6wUEPsMB6UqARDXaA';

exports.stripe = require('stripe')(STRIPE_SECRET_KEY);

exports.upload = multer({storage: storage});
