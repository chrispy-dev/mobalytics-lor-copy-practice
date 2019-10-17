import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <HeaderContainer>
            <GalleryTitle>Card Gallery</GalleryTitle>
            <GallerySubtext>found <CardsFound>316</CardsFound> from 316 cards.</GallerySubtext>
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
    padding: 20px;
`;

export default Header;