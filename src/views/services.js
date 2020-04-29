import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

import text from '../constants/english.json';

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
    {text.services.map((service, i) => (
      <ScrollAnimation
        key={`${service.header}-${i}`}
        animateIn="fadeIn"
        animateOnce
        duration={2}
        animatePreScroll={false}
        className="services__container"
        style={{
          borderBottom: (i === (text.services.length - 1)) ? 'none' : '1px solid black',
          paddingBottom: (i === (text.services.length - 1)) ? 0 : '20px',
        }}
      >
        <h3 className="services__container__header">
          {service.header}
        </h3>
        {serviceMap(service.services)}
      </ScrollAnimation>
    ))}
  </div>
);

export default Services;
