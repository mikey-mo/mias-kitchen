import React from 'react';
import styled from 'styled-components';

import PastaOne from '../assets/header-images/pasta_one.jpg';
import PastaTwo from '../assets/header-images/pasta_two.jpg';
import ChickenOne from '../assets/header-images/chicken_one.jpg';
import TacosOne from '../assets/header-images/tacos_one.jpg';

const ImageContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items; center;
  height: 300px;
  overflow: hidden;
`;

const RandomizeImageDisplay = () => {
  const potentialImages = [PastaOne, PastaTwo, ChickenOne, TacosOne];
  const randomImage = Math.floor(Math.random() * ((potentialImages.length) - 0)) + 0;
  const image = potentialImages[randomImage];
  return (
    <img
      style={{
        objectFit: 'cover',
        width: '100%',
        height: '300px',
      }}
      src={image}
      alt="Pasta"
    />
  )
}

const SplashImage = () => (
  <ImageContainer>
    {RandomizeImageDisplay()}
  </ImageContainer>
);

export default SplashImage;
