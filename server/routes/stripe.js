const express = require('express');
const router = express.Router();

const checkAuth = require('../auth/check_auth');

const stripe_handler = require('../handlers/stripe');

router.post('/', stripe_handler.chargeCard);

module.exports = router;