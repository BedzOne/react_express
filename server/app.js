const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');

const config = require('./config');

const users = require('./routes/users');
const products = require('./routes/products');
const cart = require('./routes/cart');
const order = require('./routes/order');
const categories = require('./routes/categories');
const stripeRoute = require('./routes/stripe');

config.mongoConnect();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
  res.setHeader('Access-Control-Allow-Headers', 'Content-type, Authorization');
  next();
});

//apply express middleware

app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));
app.use(cors());

//routes

app.use('/user', users);
app.use('/products', products);
app.use('/cart', cart);
app.use('/order', order);
app.use('/charge', stripeRoute);
app.use('/categories', categories);

app.listen(config.port, () => console.log(`server running on port ${config.port}...`));