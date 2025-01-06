const jwt = require('jsonwebtoken');

// Middleware for authentication
const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Add user details to the request object
        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid token.' });
    }
};

module.exports = authMiddleware;
