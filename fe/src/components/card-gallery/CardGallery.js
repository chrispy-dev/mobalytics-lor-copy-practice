import React from 'react';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';

import AdvancedFilter from './AdvancedFilter';
import Header from './Header';

const CardGallery = ({ cards }) => {

    return (
        <Container>
            <FlexContainer>
                <Header />
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

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Container = styled.div`
    height: calc(100vh - 53px);
    background-color: rgba(45, 38, 79, 0.9);
    display: flex;

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
        cards: state.cards
    }
}

export default connect(mapStateToProps, null)(CardGallery);