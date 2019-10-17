import React from 'react';
import styled from 'styled-components';

import { NavLink } from './NavMenu';

const NavBar = () => {
    return (
        <Nav>
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
    justify-content: flex-end;
    padding: 18px;
    background-color: #291F4F;
    box-shadow: rgb(20, 11, 36) 0px 2px 6px 0px;
`;

const InnerNav = styled.div`
    display: flex;
`;

export default NavBar;