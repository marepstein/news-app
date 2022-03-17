import styled from 'styled-components';
import { media } from '../../styles/mediaQueries';

const Title = styled.h2`
    font-size: 0.875rem;

    ${media.tablet`
        font-size: 1rem;

        &:hover {
            text-decoration: underline;
        }
    `}
`;

export default Title;
