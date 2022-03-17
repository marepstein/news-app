import styled from 'styled-components';
import { media } from '../styles/mediaQueries';

import ArticleCard from '../components/common/Card';
import Button from '../components/common/Button';
import FilterBar from '../components/FilterBar';
import Spinner from '../components/common/Spinner';
import AppContainer from '../components/layout/Layout';

const ContentWrapper = styled.div`
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${media.tablet`
        height: 118rem;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: stretch;
  `};
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 1rem 0;
    padding: 0 1rem;
`;

const SelectedCategory = styled.h1`
    font-size: 2rem;
    text-transform: uppercase;
    margin: 0;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
`;

const BottomButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.5rem;

    ${media.tablet`
        justify-content: flex-end;
        padding: 0 1rem;
    `}
`;

export default function Home({
    articles,
    setFilter,
    filter,
    setPage,
    page,
    loading
}) {
    const handleClick = (clickedLink) => {
        setFilter(clickedLink);
    };

    return (
        <AppContainer>
            <FilterBar onClick={handleClick} />
            <Container>
                <SelectedCategory>{filter}</SelectedCategory>
                <ButtonContainer>
                    <Button
                        disabled={page <= 1}
                        onClick={() => setPage(page - 1)}
                        children="Prev"
                    ></Button>
                    <Button
                        disabled={page >= 9}
                        onClick={() => setPage(page + 1)}
                        children="Next"
                    ></Button>
                </ButtonContainer>
            </Container>
            <ContentWrapper>
                {!loading ? (
                    <ArticleCard articles={articles} loading={loading} />
                ) : (
                    <Spinner />
                )}
            </ContentWrapper>
            <BottomButtonContainer>
                <Button
                    disabled={page <= 1}
                    onClick={() => setPage(page - 1)}
                    children="Prev"
                ></Button>
                <Button
                    disabled={page >= 9}
                    onClick={() => setPage(page + 1)}
                    children="Next"
                ></Button>
            </BottomButtonContainer>
        </AppContainer>
    );
}
