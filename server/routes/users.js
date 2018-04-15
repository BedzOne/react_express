const express = require('express');
const router = express.Router();

const user_handler = require('../handlers/users');
const checkAuth = require('../auth/check_auth');

router.post('/register', user_handler.registerUser);
router.get('/register', user_handler.getUsers);

router.delete('/:userId', checkAuth, user_handler.deleteUser);
router.put('/:userId', user_handler.updateUser);
router.put('/address/:userId', user_handler.changeAddress);
router.post('/password/:userId', user_handler.changeUserPassword);

router.post('/login', user_handler.loginUser);
router.get('/:userId', user_handler.getSingleUser);

module.exports = router;

