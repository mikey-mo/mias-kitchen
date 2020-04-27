import React from 'react';
import styled from 'styled-components';

import NavButton from './nav-button';

const NavHeader = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 0 20px;
`;

const buttons = ['about', 'menu', 'contact', 'hours', 'location'];

const DisplayNavButtons = buttons => buttons.map(button => <NavButton key={button} title={button} />);

const NavBar = () => (
  <NavHeader>
    {DisplayNavButtons(buttons)}
  </NavHeader>
);

export default NavBar;
