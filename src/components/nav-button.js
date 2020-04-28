import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const NavButton = ({ title }) => {
  const location = useLocation().pathname.replace('/', '');
  return (
    <Link to={`/${title}`} className="nav-button">
      <p
        className="nav-button__text"
        style={{
          borderBottom: title === location ? '1px solid black' : '1px solid transparent',
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
