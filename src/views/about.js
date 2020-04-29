import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

import text from '../constants/english.json';

import ChefOne from '../assets/about-images/chef_one.jpg';
import KitchenOne from '../assets/about-images/kitchen_one.jpg';
import CateringOne from '../assets/about-images/catering_one.jpg';

const About = () => (
  <div>
      <h4 className="about__quote">
        {text.about.quote}
      </h4>
    <ScrollAnimation
      animateIn="fadeIn"
      animateOnce
      duration={1}
    >
      <section className="about">
        <div className="about__column left-column">
          <img
            className="about__column__image"
            src={ChefOne}
            alt="about-one"
          />
        </div>
        <div className="about__column">
          <h2 className="about__column__text-header">
            {text.about.rowOneHeader}
          </h2>
          <p className="about__column__text">
            {text.about.rowOne}
          </p>
        </div>
      </section>
    </ScrollAnimation>
    <ScrollAnimation
      animateIn="fadeIn"
      animateOnce
      duration={1}
    >
      <section className="about reverse">
        <div className="about__column left-column">
          <h2 className="about__column__text-header">
            {text.about.rowTwoHeader}
          </h2>
          <p className="about__column__text">
            {text.about.rowTwo}
          </p>
        </div>
        <div className="about__column">
          <img
            className="about__column__image"
            src={KitchenOne}
            alt="kitchen-one"
          />
        </div>
      </section>
    </ScrollAnimation>
    <ScrollAnimation
      animateIn="fadeIn"
      animateOnce
      duration={1}
    >
      <section className="about">
        <div className="about__column left-column">
          <img
            className="about__column__image"
            src={CateringOne}
            alt="catering-one"
          />
        </div>
        <div className="about__column">
          <h2 className="about__column__text-header">
            {text.about.rowThreeHeader}
          </h2>
          <p className="about__column__text">
            {text.about.rowThree}
          </p>
        </div>
      </section>
    </ScrollAnimation>
  </div>
);

export default About;
