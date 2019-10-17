import React from 'react';
import styled from 'styled-components';

import { NavLink } from './NavMenu';

const NavBar = () => {
    return (
        <Nav>
            <Logo><Chris>CHRIS</Chris>ALYTICS</Logo>
            <InnerNav>
                <NavLink active topNav to="core-set">Core Set</NavLink>
                <NavLink active topNav to="guides">Guides</NavLink>
                <NavLink active topNav to="twitch-extension">Twitch Extension</NavLink>
            </InnerNav>
        </Nav>
    );
};

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 18px;
    background-color: #291F4F;
    box-shadow: rgb(20, 11, 36) 0px 2px 6px 0px;
`;

const Logo = styled.h2`
    font-size: 1rem;
    font-weight: 200;
    color: white;
    margin: 0;
    letter-spacing: 2px;
`;

const Chris = styled.span`
    font-weight: 600;
`;

const InnerNav = styled.div`

`;

export default NavBar;