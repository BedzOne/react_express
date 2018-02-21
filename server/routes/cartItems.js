const express = require('express');
const router = express.Router();
const upload = require('../config').upload;

const cartItem_handler = require('../handlers/cartItems');

router.post('/items', upload.single('productImage'), cartItem_handler.addToCart);
router.get('/items', cartItem_handler.getCartItems);

module.exports = router;