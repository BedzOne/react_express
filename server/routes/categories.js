const express = require('express');
const router = express.Router();

const category_handler = require('../handlers/category');

router.get('/', category_handler.getCategories);
router.post('/', category_handler.createCategory);

router.get('/:id', category_handler.getSingleCategory);

module.exports = router;