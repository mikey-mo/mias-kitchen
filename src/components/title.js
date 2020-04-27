import React from 'react';
import styled from 'styled-components';

import text from '../constants/english.json';

const TitleText = styled.h1`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 60px;
  letter-spacing: 10px;
  font-weight: lighter;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
`;

const Title = () => (
  <TitleText>
    {text.header.title}
  </TitleText>
);

export default Title;
