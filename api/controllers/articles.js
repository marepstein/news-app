import axios from 'axios';

const getArticles = async () => {
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
};

export default getArticles;
