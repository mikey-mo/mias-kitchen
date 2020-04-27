import React from 'react';
import styled from 'styled-components';

import NavBar from '../components/nav-bar';
import SplashImage from '../components/splash-image';
import Title from '../components/title';
import Contact from '../components/contact';

const HeaderContainer = styled.header`
  position: relative;
`;

const Header = () => (
  <HeaderContainer>
    <NavBar />
    <Contact />
    <SplashImage />
    <Title />
  </HeaderContainer>
);

export default Header;
