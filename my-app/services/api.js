import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_HOST,
    headers: {
        post: {
            'Content-Type': 'application/json'
        }
    }
});

export default api;
