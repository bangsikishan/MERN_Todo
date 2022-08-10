// IMPORT REQUIRED PACKAGES
const express = require('express');

const todoController = require('../controllers/todoController');

const router = express.Router();


// CREATE ROUTES
router.get('/todos', todoController.getTodos);
router.post('/todo', todoController.createTodos);
router.delete('/:id', todoController.deleteTodo);


// EXPORT ROUTER
module.exports = router;