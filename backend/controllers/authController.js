const User = require('../models/userModel.js');
const jwt = require('jsonwebtoken'); 
const bcrypt = require('bcryptjs'); 

// Generate JWT token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

// Register a new user
exports.registerUser = async (req, res) => {
    const { username, password } = req.body;

    const userExists = await User.findOne({ username });

    if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user
    const user = await User.create({ username, password });

    if (user) {
        res.status(201).json({
            _id: user._id,
            username: user.username,
            token: generateToken(user._id), // Send token with response
        });
    } else {
        res.status(400).json({ message: 'Invalid user data' });
    }
};

// Authenticate user login
exports.authUser = async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            username: user.username,
            token: generateToken(user._id),
        });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
};
