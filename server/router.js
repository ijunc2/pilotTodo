import express from 'express';
import {commentRouter, userRouter, todoRouter} from './routers';

const router = express();

router.use('/', userRouter);
router.use('/', todoRouter);
router.use('/', commentRouter);

export default router;