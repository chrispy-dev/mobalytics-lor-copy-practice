import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { toggleNavMenu } from '../store/actions';

import '../App.css';

const NavMenu = ({ menuToggle, toggleNavMenu }) => {
    return (
        <Nav closed={!menuToggle}>
            <NavLinkContainer toggleButton onClick={() => toggleNavMenu()}>
                {
                    menuToggle
                    ? <NavIcon active className="fas fa-chevron-left"></NavIcon>
                    : <NavIcon active className="fas fa-chevron-right"></NavIcon>
                }
            </NavLinkContainer>
            <LongHr></LongHr>
            <LinkContainer>
                <NavLinkContainer>
                    <NavIcon active className="fas fa-address-book"></NavIcon>
                    {menuToggle && <NavLink active to="/card-gallery">Card Gallery</NavLink>}
                </NavLinkContainer>
                <NavLinkContainer>
                    <NavIcon className="fas fa-book-open"></NavIcon>
                    {menuToggle && <NavLink to="/deck-library">Deck Library</NavLink>}
                </NavLinkContainer>
                <NavLinkContainer>
                    <NavIcon className="fas fa-tasks"></NavIcon>
                    {menuToggle && <NavLink to="/deck-library">Deck Manager</NavLink>}
                </NavLinkContainer>
                <NavLinkContainer>
                    <NavIcon className="fas fa-shapes"></NavIcon>
                    {menuToggle && <NavLink to="/deck-library">Deck Builder</NavLink>}
                </NavLinkContainer>
            </LinkContainer>
        </Nav>
    );
};

const LongHr = styled.hr`
    width: 100%;
    margin: 0;
    background-color: #291F4F;
    border: none;
    height: 1px;
`;

const LinkContainer = styled.div`
    width: 100%;
`;

const Nav = styled.nav`
    background-color: #160D33;
    height: calc(100vh - 53px); 
    min-width: 205px;

    display: flex;
    flex-direction: column;
    align-items: center;

    ${({ closed }) => closed && css`
        min-width: auto;
    `}
`;

const NavLinkContainer = styled.div`
    width: 100%;
    padding: 20px;

    ${props =>
        props.toggleButton && css`
            margin: 0;
            padding: 10px 15px 10px 10px;
            display: flex;
            justify-content: flex-end;
            cursor: pointer;
    `}
`;

export const NavLink = styled(Link)`
    text-decoration: none;
    color: rgba(170, 171, 202, .5);
    font-size: 0.9rem;
    margin-left: 10%;
    cursor: pointer;

    ${props =>
        props.active && css`
            color: rgba(170, 171, 202, 1);
    `}

    ${props =>
        props.topNav && css`
            margin: 0 20px 0 0;
            
            &:last-child {
                margin: 0;
            }
    `}
`;

const NavIcon = styled.i`
    color: rgba(170, 171, 202, .5);
    cursor: pointer;

    ${props =>
        props.active && css`
            color: rgba(170, 171, 202, 1);
    `}
`;

const mapStateToProps = (state) => {
    return {
        menuToggle: state.menuToggle
    }
}

export default connect(mapStateToProps, { toggleNavMenu })(NavMenu);