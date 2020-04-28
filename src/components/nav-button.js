import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavButton = ({ title }) => {
  return (
    <Link to={`/${title}`} className="nav-button">
      <p
        className="nav-button__text"
        style={{
          borderBottom: 'none',
        }}
      >
        {title}
      </p>
    </Link>
  );
}

export default NavButton;

NavButton.propTypes = {
  title: PropTypes.string,
  selected: PropTypes.string,
};
