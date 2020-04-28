import React from 'react';

import NavButton from './nav-button';
import Contact from './contact';

const buttons = ['about', 'menu', 'contact', 'hours', 'location'];

const DisplayNavButtons = buttons => buttons.map(button => <NavButton key={button} title={button} />);

const NavBar = () => (
  <nav className="nav-bar">
    {DisplayNavButtons(buttons)}
    <Contact />
  </nav>
);

export default NavBar;
