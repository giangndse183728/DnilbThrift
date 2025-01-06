// controllers/authController.js
const User = require('../models/user.model');
const { generateToken } = require('../utils/tokenUtil');

// Login user
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: 'User not found' });

        // Check user status
        if (user.status !== 'active') {
            return res.status(403).json({ message: 'Account is inactive. Please contact support.' });
        }

        // Compare passwords
        const isMatch = await user.comparePassword(password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        // Generate JWT
        const token = generateToken({ id: user._id, role: user.role });
        res.json({ token, user: { id: user._id, username: user.username, email: user.email, role: user.role } });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
