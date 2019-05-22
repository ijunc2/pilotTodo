import session from './internal/session';
import Comment from '../models/Comment';
import Todo from '../models/Todo'

const findMyTodo = (req, sess) =>
  Todo.findOne({
    owner: sess,
    _id: req.params.todo_id
  });

const findMyComment = (req, sess, todo) =>
  Comment.findOne({
    todo,
    owner: sess,
    _id: req.params.comment_id
  });

const injectData = async (req, sess) => ({
  sess,
  todo: await findMyTodo(req, sess)
});

export const insertComment = (req, res) =>
  session(req, res)
    .then(sess => injectData(req, sess))
    .then(({todo, sess}) => {
      let comment = new Comment();
      console.log(todo)
      comment.owner = sess;
      comment.todo = todo;
      comment.comment = req.body.comment;
      return comment.save();
    })
    .then(comment => res.send({comment}))
    .catch(() => res.status(500).send({
        message: 'error happens',
    }));

export const updateComment = (req, res) =>
  session(req, res)
    .then(async sess => ({
      sess,
      todo: await findMyTodo(req, sess)
    }))
    .then(async ({sess, todo}) => ({
      sess, todo,
      comment: await findMyComment(req, sess, todo)
    }))
    .then(({comment}) => {
      comment.comment = req.body.comment;
      comment.updatedDate = Date.now();
      return comment.save();
    })
    .then(comment => Comment.findOne({
      _id: comment._id
    }).populate('owner', 'name')
      .populate('todo', 'content'))
    .then(comment => res.send(comment))
    .catch(e => res.status(500).send({
      message: 'has some error', e
    }));

export const deleteComment = (req, res) =>
  session(req, res)
    .then(async sess => ({
      sess,
      todo: await findMyTodo(req, sess)
    }))
    .then(async ({sess, todo}) => ({
      sess, todo,
      comment: await findMyComment(req, sess, todo)
    }))
    .then(({comment}) => comment.remove())
    .then(() => res.send({message: 'success'}))
    .catch(() => res.status(500).send({message: 'has error'}))

export const retrieveComment = (req, res) =>
  session(req, res)
    .then(async sess => ({
      sess,
      todo: await findMyTodo(req, sess)
    }))
    .then(({sess, todo}) => Comment.find({
      owner: sess,
      todo
    }).populate('owner'))
    .then(comments => res.send({comments}))
    .catch(e => res.status(400).json({message: e}))
