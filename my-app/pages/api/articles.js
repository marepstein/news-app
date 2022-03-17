import api from '../../services/api';

export default async (req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const currentPage = req.query.currentPage;
                const query = req.query.q;

                const { data } = await api.get('api/articles', {
                    params: {
                        currentPage: currentPage,
                        q: query
                    }
                });
                res.json(data);
            } catch (err) {
                const statusCode = err.response ? err.response.status : 500;
                const message = err.response
                    ? err.response.data.errors
                    : err.message;

                res.status(statusCode).json({
                    type: err.type,
                    errors: message
                });
            }
            break;
    }
};
