const express = require('express');
const router = express.Router();
const upload = require('../config').upload;

const product_handler = require('../handlers/products');
const category_handler = require('../handlers/category');

router.post('/list/:id', upload.single('productImage'), product_handler.uploadProduct);
router.get('/list', product_handler.getProducts);
router.get('/:id', product_handler.getSingleProduct);
router.delete('/:id/:productId', product_handler.removeProduct);
router.put('/:id', product_handler.updateProduct);

router.get('/list/cat', category_handler.getCategories);

module.exports = router;
