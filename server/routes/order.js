const express = require('express');
const router = express.Router();

const order_handler = require('../handlers/order');

router.get('/:id', order_handler.getOrders);
router.post('/:id', order_handler.createOrder);
router.delete('/:id', order_handler.deleteOrder);

module.exports = router;