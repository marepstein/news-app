
import Link from 'next/link';
import styled from "styled-components";
import Burger from './burgerMenu';

const Nav = styled.nav`
  background-color: ${p => p.theme.colors.primaryWhite};
  width: 100%;
  // border-bottom: 2px solid #f1f1f1;
  box-shadow: 0 4px 2px -2px #bababa;
  padding: 2rem 1rem;
  display: flex;
  z-index: 1;
`;

const MenuLink = styled(Link)`
  color: ${p => p.theme.colors.black};
  padding: 1rem 2rem;
  font-weight: ${p => p.theme.h1.fontWeight};
  font-size: ${p => p.theme.h1.size};
  text-decoration: none;
`;

const Menu = () => {
    return (
        <Nav>
            <MenuLink href="/">Home</MenuLink>
            <MenuLink href="/all-news">All News</MenuLink>
            <Burger />
        </Nav>
    )
}

export default Menu;
