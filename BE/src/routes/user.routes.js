// routes/userRoutes.js
const express = require('express');
const { registerUser, getUser } = require('../controllers/userController');

const router = express.Router();

// User routes
router.post('/register', registerUser);
router.get('/:id', getUser);

module.exports = router;
