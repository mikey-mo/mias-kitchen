import React from 'react';

import PastaOne from '../assets/header-images/pasta_one.jpg';
import PastaTwo from '../assets/header-images/pasta_two.jpg';
import ChickenOne from '../assets/header-images/chicken_one.jpg';
import TacosOne from '../assets/header-images/tacos_one.jpg';
import PizzaOne from '../assets/header-images/pizza_one.jpg';
import CakeOne from '../assets/header-images/cake_one.jpg';
import SaladOne from '../assets/header-images/salad_one.jpg';
import SoupOne from '../assets/header-images/soup_one.jpg';

const RandomizeImageDisplay = () => {
  const potentialImages = [SoupOne, PastaOne, PastaTwo, ChickenOne, TacosOne, PizzaOne, CakeOne, SaladOne];
  const randomImage = Math.floor(Math.random() * ((potentialImages.length) - 0)) + 0;
  const image = potentialImages[randomImage];
  return (
    <img
      alt="splash"
      style={{
        objectFit: 'cover',
        width: '100%',
        height: '300px',
      }}
      src={image}
    />
  )
}

const SplashImage = () => (
  <div className="splash-image">
    {RandomizeImageDisplay()}
  </div>
);

export default SplashImage;
