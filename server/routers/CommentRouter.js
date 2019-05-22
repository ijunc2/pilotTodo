import express from 'express';
import {deleteComment, insertComment, retrieveComment, updateComment} from '../services/CommentService'

const router = express();

router.post('/todo/:todo_id/comment', insertComment);
router.get('/todo/:todo_id/list/comment', retrieveComment);
router.put('/comment/:todo_id/:comment_id', updateComment);
router.delete('/comment/:todo_id/:comment_id', deleteComment);

export default router;