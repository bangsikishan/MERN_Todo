// IMPORT REQUIRED FILES AND PACKAGES
const todoModel = require('../models/todoModel');
const todoErrorHandler = require('../errorHandling/todoErrorHandler');
const mongoose = require('mongoose');


// CREATE METHODS TO PERFORM DIFFERENT ACTIONS
const getTodos = async (req, res) => {
    try {
        const todos = await todoModel.find({}).sort({ createdAt: -1 });
        res.json({ todos });
    }
    catch(err) {
        res.json({ error: err.message });
    }
}

const createTodos = async (req, res) => {
    const { name, description } = req.body;

    try {
        const todo = await todoModel.create({ name, description });
        res.json({ todo });
    }
    catch(err) {
        const error = todoErrorHandler(err);
        res.json({ error });
    }
}

const deleteTodo = async (req, res) => {
    const { id } = req.params;
    
    try {
        if(!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error('Not a valid ID!');
        }

        const todo = await todoModel.findByIdAndDelete({ _id: id });

        if(!todo) {
            throw new Error('Could not find the todo!');
        }

        res.json({ todo });
    }
    catch(err) {
        res.json({ error: err.message });
    }
}


// EXPORT ALL METHODS
module.exports = {
    getTodos,
    createTodos,
    deleteTodo
};