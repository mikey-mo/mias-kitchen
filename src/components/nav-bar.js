import React from 'react';

import NavButton from './nav-button';
import Contact from './contact';
import text from '../constants/english.json';


const DisplayNavButtons = () => text.navigation.routes.map(button => <NavButton key={button} title={button} />);

const NavBar = () => (
  <nav className="nav-bar">
    {DisplayNavButtons()}
    <Contact />
  </nav>
);

export default NavBar;
