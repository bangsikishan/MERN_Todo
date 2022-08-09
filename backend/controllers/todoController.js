// IMPORT TODO MODEL
const todoModel = require('../models/todoModel');


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
        res.json({ error: err.message });
    }
}

const deleteTodo = async (req, res) => {
    const { id } = req.params;
    
    try {
        const todo = await todoModel.findByIdAndDelete({ _id: id });
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