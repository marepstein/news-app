import axios from 'axios';

const getAllArticles = (pageNum, query) => {
    const response = axios.get('/api/articles', {
        params: {
            currentPage: pageNum,
            q: query
        }
    });
    return response;
};

export default getAllArticles;
