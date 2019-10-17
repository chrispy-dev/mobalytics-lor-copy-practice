import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const NavMenu = () => {
    return (
        <Nav>
            <NavLinkContainer>
                <NavIcon active className="fas fa-address-book"></NavIcon>
                <NavLink active to="/card-gallery">Card Gallery</NavLink>
            </NavLinkContainer>
            <NavLinkContainer>
                <NavIcon className="fas fa-book-open"></NavIcon>
                <NavLink to="/deck-library">Deck Library</NavLink>
            </NavLinkContainer>
            <NavLinkContainer>
                <NavIcon className="fas fa-tasks"></NavIcon>
                <NavLink to="/deck-library">Deck Manager</NavLink>
            </NavLinkContainer>
            <NavLinkContainer>
                <NavIcon className="fas fa-shapes"></NavIcon>
                <NavLink to="/deck-library">Deck Builder</NavLink>
            </NavLinkContainer>
        </Nav>
    );
};

const Nav = styled.nav`
    background-color: #160D33;
    height: calc(100vh - 53px);    
    min-width: 205px;
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const NavLinkContainer = styled.div`
    width: 100%;
    margin-bottom: 35px;
`;

export const NavLink = styled(Link)`
    text-decoration: none;
    color: rgba(170, 171, 202, .5);
    font-size: 0.9rem;

    ${props =>
        props.active && css`
            color: rgba(170, 171, 202, 1);
    `}

    ${props =>
        props.topNav && css`
            margin-right: 20px;
            
            &:last-child {
                margin: 0;
            }
    `}
`;

const NavIcon = styled.i`
    color: rgba(170, 171, 202, .5);
    margin-right: 10%;

    ${props =>
        props.active && css`
            color: rgba(170, 171, 202, 1);
    `}
`;

export default NavMenu;