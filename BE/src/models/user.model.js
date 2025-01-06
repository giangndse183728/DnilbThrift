const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    status: { type: String, enum: ['active', 'inactive'], default: 'active' },
}, { timestamps: true });

// Hash password before saving
UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// Compare passwords
UserSchema.methods.comparePassword = function (password) {
    return bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', UserSchema, 'Users'); 
module.exports = User; 
