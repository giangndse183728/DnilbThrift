// controllers/userController.js
const User = require('../models/user.model');

// Register a new user
exports.registerUser = async (req, res) => {
    try {
        const { username, email, password, phoneNumber} = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: 'Email already exists' });

        const newUser = new User({ username, email, password, phoneNumber});
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get user details (example function)
exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
