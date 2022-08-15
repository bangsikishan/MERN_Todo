// IMPORT REQUIRED PACKAGES
const mongoose = require('mongoose');

const Schema = mongoose.Schema;


// CREATE A SCHEMA
const todoSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name cannot be empty!']
    },
    description: {
        type: String
    },
    user_id: {
        type: String,
        required: true
    }
}, { timestamps: true });


// CREATE AND EXPORT MODEL BASED ON ABOVE SCHEMA
module.exports = mongoose.model('Todo', todoSchema);