import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Header = ({ cards }) => {
    return (
        <HeaderContainer>
            <GalleryTitle>Card Gallery</GalleryTitle>
            <GallerySubtext>found <CardsFound>{cards.length}</CardsFound> from 318 cards.</GallerySubtext>
        </HeaderContainer>
    );
};

const GalleryTitle = styled.h2`
    margin: 0;
    color: white;
    font-size: 1.8rem;
    font-weight: 500;
`;

const CardsFound = styled.span`
    color: white;
`;

const GallerySubtext = styled.h3`
    color: rgba(170, 171, 202, 1);
    font-size: 0.9rem;
    font-weight: 400;
    padding-left: 20px;
    margin-bottom: 0;
`;

const HeaderContainer = styled.div`

`;

const mapStateToProps = (state) => {
    return {
        cards: state.cards
    }
}

export default connect(mapStateToProps, null)(Header);