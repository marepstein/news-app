import axios from 'axios';

const getAllArticles = (pageNum) => {
    const response = axios.get('/api/articles', {
        params: {
            currentPage: pageNum
        }
    });
    return response;
};

export default getAllArticles;
