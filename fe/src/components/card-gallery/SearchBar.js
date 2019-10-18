import React from 'react';
import styled from 'styled-components';

const SearchBar = () => {
    return (
        <SearchBarContainer>
            <i className="fas fa-search"></i>
            <input placeholder="Search by name, keywords" />
        </SearchBarContainer>
    );
};

const SearchBarContainer = styled.div`
    display: flex;
    background-color: #171038;
    border: 1px solid #4E407D;
    border-radius: 5px;
    width: 215px;
    padding: 10px;
    margin-right: 20px;

    i {
        transform: scale(-1, 1);
        color: white;
        margin-right: 10px;
    }

    input {
        border: 0;
        width: 100%;
        color: rgba(170, 171, 202, 1);
        outline: none;
        font-size: 0.8rem;
        background-color: #171038;

        &::placeholder {
            color: rgba(170, 171, 202, 0.7);
        }
    }
`;

export default SearchBar;