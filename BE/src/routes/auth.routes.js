// routes/authRoutes.js
const express = require('express');
const { loginUser } = require('../controllers/authController');

const router = express.Router();

// Authentication routes
router.post('/login', loginUser);

module.exports = router;
