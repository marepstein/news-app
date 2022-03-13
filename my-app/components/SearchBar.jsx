import { useState } from 'react';
import styled from 'styled-components';

const Input = styled.input`
    width: 50%;
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
    const [searchInput, setSearchInput] = useState();

    const searchItems = (searchValue) => {
        setSearchInput(searchValue);
        console.log(searchValue);
    };

    const handleChange = (event) => {
        props.onChange(event.target.value);
    };

    return (
        <form action="/" method="get">
            <label htmlFor="header-search">
                <ScreenReaderTitle className="visually-hidden">
                    Search articles
                </ScreenReaderTitle>
            </label>
            <Input
                icon="search"
                placeholder="Search..."
                onChange={handleChange}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;
