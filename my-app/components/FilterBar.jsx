import { useState } from 'react';
import styled from 'styled-components';
import { media } from '../styles/mediaQueries';

const FiltersContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 100%;
    border: 1px ${(p) => p.theme.colors.borderGrey};
    border-style: solid none;
    padding: 0 0.5rem;

    ${media.tablet`
        padding: 0;
    `}
`;

const FilterLink = styled.div`
    width: 4rem;
    padding: 0.5rem 0;
    text-align: center;
    font-size: 0.75rem;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.25s border-bottom ease-in-out;
    border-bottom: solid 1px ${(p) => p.theme.colors.primaryWhite};

    &:hover {
        border-bottom: solid 1px ${(p) => p.theme.colors.primaryDarkGrey};
    }

    ${media.tablet`
        font-size: 0.85rem;
        width: 6rem;
        padding: 1rem 0;
    `}
`;

const FilterBar = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const filterCategories = [
        'fashion',
        'uk',
        'beauty',
        'art',
        'finance',
        'business',
        'celebrity',
        'tech'
    ];

    const handleClick = (event) => {
        // props.onClick(console.log(event.target.innerText));
        props.onClick(event.target.innerText);
        // props.onClick(setActiveIndex(index));
    };

    return (
        <FiltersContainer>
            {filterCategories.map((filter, index) => {
                return (
                    <FilterLink
                        value={filter}
                        onClick={handleClick}
                        key={index}
                        className={
                            activeIndex === index ? 'active' : 'inactive'
                        }
                    >
                        {filter}
                    </FilterLink>
                );
            })}
        </FiltersContainer>
    );
};

export default FilterBar;
