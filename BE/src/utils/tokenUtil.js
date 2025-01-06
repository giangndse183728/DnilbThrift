const jwt = require('jsonwebtoken');

// Generate JWT Token
const generateToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
};

module.exports = { generateToken };
