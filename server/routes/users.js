const express = require('express');
const router = express.Router();

const user_handler = require('../handlers/users');
const checkAuth = require('../auth/check_auth');

router.post('/register', user_handler.registerUser);
router.get('/register', user_handler.getUsers);
router.delete('/:userId', checkAuth, user_handler.deleteUser);
router.put('/:userId', checkAuth, user_handler.updateUser);

router.post('/login', user_handler.loginUser);

module.exports = router;

