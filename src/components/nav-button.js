import React from 'react';
import PropTypes from 'prop-types';

const NavButton = ({ title }) => (
  <div className="nav-button">
    <p className="nav-button__text">{title}</p>
  </div>
);

export default NavButton;

NavButton.propTypes = {
  title: PropTypes.string,
};
