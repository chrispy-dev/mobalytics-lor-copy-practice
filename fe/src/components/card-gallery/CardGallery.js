import React from 'react';
import styled from 'styled-components';

import Header from './Header';

const CardGallery = () => {
    return (
        <Container>
            <Header />
            <CardsContainer>
                
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
    width: 100%;
`;

export default CardGallery;