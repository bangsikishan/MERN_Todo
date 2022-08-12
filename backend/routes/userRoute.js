const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();


// ROUTES FOR SIGNUP & LOGIN
router.post('/signup', userController.signup);
router.post('/login', userController.login);


// EXPORT ROUTER
module.exports = router;