import React from 'react';

import text from '../constants/english.json';
import ChefLogo from '../assets/logos/chef_logo_one.jpg';

const Title = () => (
  <div className="title">
    <img
      src={ChefLogo}
      className="title__image"
    />
    <div style={{ textAlign: 'center' }}>
      <h1 className="title__text">
        {text.header.title}
      </h1>
      <h6 className="title__sub-text">
        {text.header.subTitle}
      </h6>
    </div>
  </div>
);

export default Title;
