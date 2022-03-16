import express from 'express';
import getArticles from '../controllers/articles.js';

const router = express.Router();

router.get('/api/articles', getArticles);

export default router;
