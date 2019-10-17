import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Header from './Header';

const CardGallery = ({ cards }) => {

    return (
        <Container>
            <Header />
            <CardsContainer>
                {cards.map(card => (
                    <StyledImg key={card.cardCode} src={`./img/cards/${card.cardCode}.png`} alt="#" />
                ))}
            </CardsContainer>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    height: calc(100vh - 53px);
    background-color: rgba(45, 38, 79, 0.9);
    display: flex;
    flex-direction: column;
`;

const CardsContainer = styled.div`
    height: 100%;
    overflow: scroll;
    box-sizing: border-box;
    padding: 0 20px 20px 20px;
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