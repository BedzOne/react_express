const express = require('express');
const router = express.Router();
const upload = require('../config').upload;

const product_handler = require('../handlers/products');

router.post('/list', upload.single('productImage'), product_handler.uploadProduct);
router.get('/list', product_handler.getProducts);
router.get('/:id', product_handler.getSingleProduct);
router.delete('/:id', product_handler.removeProduct);
router.put('/:id', product_handler.updateProduct);

module.exports = router;
