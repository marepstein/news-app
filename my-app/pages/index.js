import styled from 'styled-components';
import { media } from '../styles/mediaQueries';

import { useState, useEffect } from 'react';
import getAllArticles from '../services/getArticles';

import SearchBar from '../components/SearchBar';
import ArticleCard from '../components/common/Card';
import Button from '../components/common/Button';

const ContentWrapper = styled.div`
    max-width: 1360px;
    margin: 2rem auto;
    display: flex;
    justify-content: center;
    flex-direction: column;

    ${media.tablet`
      flex-direction: row;
      flex-wrap: wrap;
  `}

    > :nth-child(4n) {
        border: 1px solid red;
    }
`;

export default function Home() {
    const [articles, setArticles] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState();
    const [page, setPage] = useState(1);
    const [filter, setFilter] = useState('uk');

    const handleChange = (searchValue) => {
        // if (!searchValue || searchValue.length === 0) {
        //     setFilter('uk');
        // }
        setFilter(searchValue);
        console.log(searchValue.length);
    };

    useEffect(() => {
        setLoading(true);
        getAllArticles(page, filter)
            .then((response) => {
                setArticles(response.data.articles);
                setLoading(false);
            })
            .catch((error) => setError(error.message));
    }, [page, filter]);

    return (
        <>
            <SearchBar onChange={handleChange} />
            <ContentWrapper>
                <ArticleCard articles={articles} />
                <Button
                    disabled={page <= 1}
                    onClick={() => setPage(page - 1)}
                    children="Prev"
                ></Button>
                <Button
                    disabled={page >= 10}
                    onClick={() => setPage(page + 1)}
                    children="Next"
                ></Button>
            </ContentWrapper>
        </>
    );
}
