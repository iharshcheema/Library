//Creating a user model
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'student', 'teacher'], // Enum for roles
        default: 'admin'
    },
    email: {
        type: String,
        required: true
    },
    booksBorrowed: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BookSchema'
    },

    //payment due (kitni hai aur last din)
});

module.exports = mongoose.model('user', UserSchema);
