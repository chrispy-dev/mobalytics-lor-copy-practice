import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';

import { toggleFilter, checkForOptions, clearAllFilters } from '../../store/actions';
import AdvancedFilter from './AdvancedFilter';
import HandledSearchBar from './HandledSearchBar';
import Header, { GalleryTitle, GallerySubtext } from './Header';

const CardGallery = ({ cards, toggleFilter, filterToggle, filterOptions, checkForOptions, clearAllFilters }) => {
    useEffect(() => {
        checkForOptions();
        console.log('Regions: ', filterOptions.regions);
        console.log('Mana Costs: ', filterOptions.manaCosts);
        console.log('Types: ', filterOptions.types);
        console.log('Rarities: ', filterOptions.rarities);
    }, [filterOptions])

    return (
        <Container spaceBetween>
            <FlexContainer column>
                <FlexContainer top>
                    <Header />
                    <FlexContainer>
                        <HandledSearchBar />
                        <FilterButton hidden={!filterToggle} onClick={() => toggleFilter()}>
                            <i className="fas fa-filter"></i>
                        </FilterButton>
                    </FlexContainer>
                </FlexContainer>
                <CardsContainer>
                    {cards.length !== 0
                    ? <>
                        {cards.map(card => (
                            <StyledImg key={card.cardCode} src={`./img/cards/${card.cardCode}.png`} alt="#" />
                        ))}
                    </>
                    : <NoResults>
                        <GalleryTitle>No cards</GalleryTitle>
                        <GallerySubtext>Adjust the filters in order to see cards.</GallerySubtext>
                        <ClearButton onClick={() => clearAllFilters()}>Clear all filters</ClearButton>
                    </NoResults>
                    }
                </CardsContainer>
            </FlexContainer>
            <AdvancedFilter />
        </Container>
    );
};

const ClearButton = styled.p`
    cursor: pointer;
    color: #CCAD70;
`;

const NoResults = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const FilterButton = styled.div`
    background-color: #171038;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    cursor: pointer;
    border: 2px solid #3ABDEC;
    border-radius: 5px;

    i {
        color: white;
    }

    ${({ hidden }) => hidden && css`
        border: 2px solid #CCAD70;
    `}
`;

const FlexContainer = styled.div`
    display: flex;

    ${props =>
    props.column && css`
        flex-direction: column;
        width: 100%; 
    `}

    ${props =>
    props.top && css`
        align-items: center;
        width: 100%;
        justify-content: space-between;
        padding: 20px;
    `}
`;

export const Container = styled.div`
    height: calc(100vh - 53px);
    background-color: rgba(45, 38, 79, 0.9);
    display: flex;
    width: 100%;

    ${({ hide }) => hide && css`
        display: none;
    `}

    ${props =>
    props.landing && css`
        justify-content: center;
        align-items: center;
        flex-direction: column;
    `}

    ${props =>
    props.advancedFilter && css`
        background-color: #160D33;
        min-width: 320px;
        max-width: 320px;
        flex-direction: column;
        padding: 20px;
        height: 100%;
        overflow: scroll;
    `}

    ${props =>
    props.filterFlexItem && css`
        background-color: #160D33;
        padding: 20px 0 0 0;
        height: auto;
        width: 100%;
        flex-direction: column;
    `}

    ${props =>
    props.spaceBetween && css`
        justify-content: space-between;
    `}
`;

const CardsContainer = styled.div`
    height: 100%;
    overflow: scroll;
    padding: 0 10px 10px 10px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
`;

const StyledImg = styled.img`
    height: 335px;
    margin: 10px;

    &:hover {
        transform: scale(1.05)
    }
`;

const mapStateToProps = (state) => {
    return {
        cards: state.cards,
        filterToggle: state.filterToggle,
        filterOptions: state.filterOptions
    }
}

export default connect(mapStateToProps, { toggleFilter, checkForOptions, clearAllFilters })(CardGallery);