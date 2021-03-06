const express = require('express');
const router = express.Router();
const upload = require('../config').upload;

const checkAuth = require('../auth/check_auth');
const cartItem_handler = require('../handlers/cart');

router.post('/:id', upload.single('productImage'), cartItem_handler.addToCart);
router.get('/:id', cartItem_handler.getCartItems);
router.delete('/:id', cartItem_handler.deleteCartItem);
router.put('/:id', cartItem_handler.updateCartItem);
router.delete('/empty/:id', cartItem_handler.clearCart);

module.exports = router;