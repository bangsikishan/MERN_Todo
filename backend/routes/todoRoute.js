// IMPORT REQUIRED PACKAGES
const express = require('express');

const todoController = require('../controllers/todoController');
const validate = require('../authentication/validateToken');

const router = express.Router();


// CREATE ROUTES
router.use(validate);
router.get('/todos', todoController.getTodos);
router.post('/todo', todoController.createTodos);
router.delete('/:id', todoController.deleteTodo);


// EXPORT ROUTER
module.exports = router;