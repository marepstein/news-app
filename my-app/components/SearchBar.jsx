import { useState } from 'react';
import styled from 'styled-components';

const Input = styled.input`
    width: 50%;
`;

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState();

    const searchItems = (searchValue) => {
        setSearchInput(searchValue);
        console.log(searchValue);
    };

    return (
        <Input
            icon="search"
            placeholder="Search..."
            onChange={(e) => searchItems(e.target.value)}
        />
    );
};

export default SearchBar;
