import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

import text from '../constants/english.json';

import Catering from '../assets/services-images/catering.jpg';
import Delivery from '../assets/services-images/delivery.jpg';
import PrivateChef from '../assets/services-images/private_chef.jpg';

const images = {
  Catering,
  Delivery,
  PrivateChef,
};

const serviceMap = (services, i) => services.map((service) => (
  <p
    key={i}
    className="services__container__services"
  >
    {service}
  </p>
));

const Services = () => (
  <div className="services">
    <h4 className="services__header">
      {text.services.header}
    </h4>
    {text.services.services.map((service, i) => (
      <ScrollAnimation
        key={`${service.header}-${i}`}
        animateIn="fadeIn"
        animateOnce
        duration={1}
        className="services__container"
        style={{
          paddingBottom: (i === (text.services.services.length - 1)) ? 0 : '20px',
        }}
      >
        <img
          className="services__container__image"
          src={images[service.image]}
          alt={JSON.stringify(service.image)}
        />
        <h3 className="services__container__header">
          {service.header}
        </h3>
        {serviceMap(service.services)}
      </ScrollAnimation>
    ))}
  </div>
);

export default Services;
