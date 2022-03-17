import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import '../styles/globals.css';

import getAllArticles from '../services/getArticles';
import Menu from '../components/nav/menu';

function MyApp({ Component, pageProps }) {
    const [articles, setArticles] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState();
    const [page, setPage] = useState(1);
    const [filter, setFilter] = useState('fashion');

    useEffect(() => {
        setLoading(true);
        console.log('app', filter);
        getAllArticles(page, filter)
            .then((response) => {
                setArticles(response.data.articles);
                setLoading(false);
            })
            .catch((error) => setError(error.message));
    }, [page, filter]);

    const handleChange = (searchValue) => {
        setFilter(searchValue);
    };

    return (
        <ThemeProvider theme={theme}>
            <Menu handleChange={handleChange} />
            <Component
                {...pageProps}
                articles={articles}
                page={page}
                setPage={setPage}
                filter={filter}
                setFilter={setFilter}
                loading={loading}
            />
        </ThemeProvider>
    );
}

export default MyApp;
