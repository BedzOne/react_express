const mongodb = require('mongodb');
const mongoose = require('mongoose');
const multer = require('multer');

mongoose.Promise = global.Promise;
const db = mongoose.connection;

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

exports.upload = multer({storage: storage});
