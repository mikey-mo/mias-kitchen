import React from 'react';

import NavBar from '../components/nav-bar';
import SplashImage from '../components/splash-image';
import Title from '../components/title';
import Contact from '../components/contact';

const Header = () => (
  <header>
    <NavBar />
    <Contact />
    <SplashImage />
    <Title />
  </header>
);

export default Header;
