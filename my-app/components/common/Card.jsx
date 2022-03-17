import styled from 'styled-components';
import Moment from 'react-moment';

import { media } from '../../styles/mediaQueries';
import Title from './Title';

const Card = styled.article`
    flex: 1 1 30%;
    max-width: 26rem;
    margin: 1rem;
    text-align: left;
    color: inherit;
    text-decoration: none;
    border: 1px solid ${(p) => p.theme.colors.primaryLighterGrey};
    transition: 0.25s transform ease-in-out, 0.25s border-color ease,
        0.25s box-shadow ease;
    cursor: pointer;

    &:hover {
        box-shadow: 0 0 10px 1px hsl(0deg 0% 0% / 10%);
    }
`;

const Image = styled.img`
    min-width: 100%;
    max-height: 13.15rem;
    height: 13.15rem;
    width: 12.5rem;
`;

const CardInfo = styled.div`
    padding: 1rem;
    color: ${(p) => p.theme.colors.primaryBlack};
`;

const DatePublished = styled(Moment)`
    font-size: 0.75rem;
`;

// const Title = styled.h2`
//     font-size: 0.875rem;

//     ${media.tablet`
//         font-size: 1rem;

//         &:hover {
//             text-decoration: underline;
//         }
//     `}
// `;

const Subtitle = styled.p`
    font-size: 0.75rem;
    font-weight: 400;
`;

const Source = styled.p`
    font-size: 0.75rem;
`;
const ArticleLink = styled.a`
    font-weight: 400;
`;

const ArticleCard = ({ articles }) => {
    return (
        <>
            {articles?.map((article, key) => {
                return (
                    <Card key={key}>
                        <ArticleLink
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image src={article.urlToImage} loading="lazy" />
                            <CardInfo>
                                <DatePublished format="ddd DD MMMM YYYY">
                                    {article.publishedAt}
                                </DatePublished>
                                <Title>{article.title}</Title>
                                <Subtitle>{article.description}</Subtitle>
                                {article.source.name && (
                                    <Source>
                                        Source: {article.source.name}
                                    </Source>
                                )}
                            </CardInfo>
                        </ArticleLink>
                    </Card>
                );
            })}
        </>
    );
};

export default ArticleCard;
