import express from 'express';
import {login} from '../services/UserService'

const router = express();

router.post('/login', (req, res) => login(req, res));

export default router;