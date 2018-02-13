const mongodb = require('mongodb');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const db = mongoose.connection;

exports.mongoConnect = () => {
  mongoose.connect('mongodb://localhost:27017/react_express');
  db.once('open', () => console.log('mongo running')).on('error', console.error.bind(console, 'connection error:'));
};
