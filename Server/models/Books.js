//Creating a user model
const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true
    },
    bookPrice: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('book', BookSchema);
