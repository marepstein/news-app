import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { media } from '../../styles/mediaQueries';

const Card = styled.div`
    max-width: 26rem;
    margin: 1rem;
    flex-basis: 45%;
    padding: 1rem 0 1rem 1rem;
    text-align: left;
    color: inherit;
    text-decoration: none;
    border: 1px solid #eaeaea;
    transition: 0.25s transform ease-in-out, 0.25s border-color ease,
        0.25s box-shadow ease;

    &:hover {
        box-shadow: 0 0 10px 1px hsl(0deg 0% 0% / 10%);
    }
`;

const Image = styled.img`
    max-width: 100%;
    max-height: 100%;
`;

const CardInfo = styled.div`
    padding: 1rem;
    background-color: ${(p) => p.theme.colors.primaryBlack};
    color: ${(p) => p.theme.colors.primaryWhite};
`;

const Title = styled.h1`
    font-size: 14px;

    ${media.tablet`
        font-size: 16px;
    `}
`;

const Subtitle = styled.h2`
    font-size: 14px;
`;

const ArticleLink = styled.a`
    font-weight: 400;
`;

const ArticleCard = ({ articles }) => {
    console.log('hi', articles);

    return (
        <>
            {articles?.map((article) => {
                return (
                    <Card>
                        <Image src={article.urlToImage} />
                        <CardInfo>
                            <Title>{article.title}</Title>
                            <Subtitle>{article.description}</Subtitle>
                            <ArticleLink href={article.url}>
                                Read now
                            </ArticleLink>
                        </CardInfo>
                    </Card>
                );
            })}
        </>
    );
};

export default ArticleCard;
