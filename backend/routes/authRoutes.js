const express = require('express');
const { registerUser, authUser } = require('../controllers/authController.js');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', authUser);

module.exports = router;
