import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { handleInputChange, searchInputTerm } from '../../store/actions';

const HandledSearchBar = ({ searchTerm, handleInputChange, searchInputTerm, filteredCards }) => {
    useEffect(() => {
        searchInputTerm();
    }, [searchTerm])

    return (
        <SearchBarContainer>
            <i className="fas fa-search"></i>
            <input 
                placeholder="Search for name, keywords" 
                value={searchTerm} 
                onChange={(event) => handleInputChange(event.target.value)} 
            />
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

const mapStateToProps = (state) => {
    return {
        searchTerm: state.searchTerm,
        filteredCards: state.filteredCards
    };
};

export default connect(mapStateToProps, { handleInputChange, searchInputTerm })(HandledSearchBar);