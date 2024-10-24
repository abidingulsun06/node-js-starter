const express = require('express');
const UserController = require('../controllers/UserController');

const router = express.Router();
const userController = new UserController();

router.get('/',  userController.auth);
router.post('/register',  userController.register);

module.exports = router;