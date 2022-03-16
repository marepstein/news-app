import styled from 'styled-components';
import { media } from '../../styles/mediaQueries';
import SearchBar from '../SearchBar';

const Nav = styled.nav`
    max-width: 85rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: ${(p) => p.theme.colors.primaryWhite};
    width: 100%;
    margin: 0 auto;
    padding: 0 1rem;
    z-index: 1;

    ${media.tablet`
        flex-direction: row;
    `}
`;

const Logo = styled.a`
    font-size: 2rem;
    font-weight: 800;
    text-transform: uppercase;
    margin: 0.5rem 0;

    ${media.mobileModern`
        font-size: 2.5rem;
    `}

    ${media.mobileLarge`
        font-size: 3rem;
    `}
`;

const Menu = ({ handleChange }) => {
    return (
        <Nav>
            <Logo>THE BIG NEWS</Logo>
            <SearchBar onChange={handleChange} />
        </Nav>
    );
};

export default Menu;
