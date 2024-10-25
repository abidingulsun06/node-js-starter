const express = require('express');
const UserController = require('../controllers/UserController');

const router = express.Router();
const userController = new UserController();

router.get('/',  userController.auth);
router.post('/register',  userController.register);
router.delete('/delete/:id', userController.delete);
router.put('/update/:id', userController.update);

module.exports = router;