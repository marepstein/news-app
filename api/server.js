import 'dotenv/config';
import express from 'express';
import pkg from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';

const { json } = pkg;
const app = express();
const port = process.env.EXPRESS_PORT;

import ArticleRouter from './routes/articles.js';

app.use(json());
app.use(cors());
app.use(morgan('combined')); // logs every request that comes through - middleware

app.use(ArticleRouter);

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});

export default app;
