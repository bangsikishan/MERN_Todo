// IMPORT REQUIRED PACKAGES
const mongoose = require('mongoose');

const Schema = mongoose.Schema;


// CREATE A SCHEMA
const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});


// CREATE AND EXPORT MODEL BASED ON ABOVE SCHEMA
module.exports = mongoose.model('User', userSchema);