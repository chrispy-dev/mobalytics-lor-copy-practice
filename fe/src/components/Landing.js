import React from 'react';
import styled from 'styled-components';

import { Container } from './card-gallery/CardGallery';

const Landing = () => {
    return (
        <Container landing>
            <Greeting>Welcome to my practice webapp.</Greeting>
            <SubGreeting>Check out my other stuff <a href="https://github.com/onetrckchris">here</a>.</SubGreeting>
        </Container>
    );
};

const Greeting = styled.h1`
    color: white;
    font-weight: 400;
`;

const SubGreeting = styled.h3`
    color: white;
    font-weight: 200;

    a {
        font-weight: 400;
        color: white;
    }
`;

export default Landing;