import 'dotenv/config';
import express from 'express';
import pkg from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import axios from 'axios';

const { json } = pkg;
const app = express();
const port = process.env.EXPRESS_PORT;

import ArticleRouter from './routes/articles.js';

app.use(json());
app.use(cors());
app.use(morgan('combined')); // logs every request that comes through - middleware

// app.use('/api/articles', ArticleRouter);

app.get('/api/articles', async (req, res) => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
    const currentPage = req.query.currentPage;
    let query = req.query.q;
    if (!query || query.length === 0) {
        query = 'uk';
    }
    const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${query}&pageSize=10&page=${currentPage}&apiKey=${process.env.API_KEY}`
    );
    const responseObj = {
        articles: response.data.articles
    };
    res.send(responseObj);
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
