import React from 'react';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';

import { toggleFilter } from '../../store/actions';
import AdvancedFilter from './AdvancedFilter';
import Header from './Header';

const CardGallery = ({ cards, toggleFilter, filterToggle }) => {

    return (
        <Container>
            <FlexContainer column>
                <FlexContainer top>
                    <Header />
                    <FilterButton hidden={!filterToggle} onClick={() => toggleFilter()}>
                        <i class="fas fa-filter"></i>
                    </FilterButton>
                </FlexContainer>
                <CardsContainer>
                    {cards.map(card => (
                        <StyledImg key={card.cardCode} src={`./img/cards/${card.cardCode}.png`} alt="#" />
                    ))}
                </CardsContainer>
            </FlexContainer>
            <AdvancedFilter />
        </Container>
    );
};

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

    ${({ hide }) => hide && css`
        display: none;
    `}

    ${props =>
    props.landing && css`
        justify-content: center;
        align-items: center;
    `}

    ${props =>
    props.advancedFilter && css`
        background-color: #160D33;
        min-width: 320px;
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
`;

const CardsContainer = styled.div`
    height: 100%;
    overflow: scroll;
    padding: 0 10px 10px 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
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
        filterToggle: state.filterToggle
    }
}

export default connect(mapStateToProps, { toggleFilter })(CardGallery);