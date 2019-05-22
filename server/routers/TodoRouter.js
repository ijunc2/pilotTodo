import express from 'express'
import {insertTodo, searchMyTodos, updateTodo, deleteTodo} from '../services/TodoService'

const router = express();

router.post('/todo', (req, res) => insertTodo(req, res));
router.get('/todos', (req, res) => searchMyTodos(req, res));
router.put('/todo/:id', (req, res) => updateTodo(req, res));
router.delete('/todo/:id', (req, res) => deleteTodo(req, res));

export default router;