import session from './internal/session';
import Todo from '../models/Todo';

export const insertTodo = (req, res) =>
  session(req, res)
    .then(sess => {
      const todo = new Todo();
      todo.owner = sess._id;
      todo.content = req.body.content;
      todo.insertedDate = Date.now();
      todo.updatedDate = Date.now();
      return todo.save();
    })
    .then(todo => res.send({todo}));

export const searchMyTodos = (req, res) =>
  session(req, res)
    .then(sess => Todo.find({
        owner: sess
      }).populate('owner', 'name'))
    .then(todo => res.send({todo}));

export const updateTodo = (req, res) =>
  session(req, res)
    .then(sess => Todo.findOne({
      owner: sess,
      _id: req.params.id
    }))
    .then(todo => {
      todo.content = req.body.content;
      todo.updatedDate = Date.now();
      return todo.save()
    })
    .then(todo => res.send({todo}))
    .catch(e => res.status(500).send({
      message: 'no data'
    }));

export const deleteTodo = (req, res) =>{
  session(req, res)
    .then(sess => Todo.remove({
      owner: sess,
      _id: req.params.id === undefined ? '' : req.params.id
    }))
    .then(() => res.status(204).send({result: 1}))
    .catch(() => res.status(500).send({
      message: 'no data'
    }));
};