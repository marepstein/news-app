import { useState } from 'react';
import styled from 'styled-components';
import { media } from '../styles/mediaQueries';

const Form = styled.form`
    text-align: center;
    margin: 1rem 0;
    width: 100%;

    ${media.tablet`
        width: 35%
    `}
`;

const Input = styled.input`
    height: 2rem;
    padding-left: 0.5rem;
    width: 100%;
    border-radius: 0%;
    box-shadow: none;
    border: solid 1px ${(p) => p.theme.colors.borderGrey};
`;

const ScreenReaderTitle = styled.span`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;

const SearchBar = (props) => {
    const handleChange = (event) => {
        props.onChange(event.target.value);
    };

    return (
        <Form action="/" method="get">
            <label htmlFor="header-search">
                <ScreenReaderTitle className="visually-hidden">
                    Search articles
                </ScreenReaderTitle>
            </label>
            <Input
                icon="search"
                placeholder="Search your own keywords..."
                onChange={handleChange}
            />
            {/* <button type="submit">Search</button> */}
        </Form>
    );
};

export default SearchBar;
