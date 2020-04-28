import React from 'react';
import { Link } from 'react-router-dom';

import text from '../constants/english.json';

const NavBar = () => {
  return (
    <nav className="mobile-footer">
      <div className="mobile-footer__buttons">
        {text.navigation.routes.map((button) => {
          return (
            <Link className="mobile-footer__buttons__link" to={`/${button}`} key={button}>
              <p className="mobile-footer__buttons__button"  style={{ margin: '0 14px', fontSize: '10px' }}>{button}</p>
            </Link>
          )}
        )}
      </div>
    </nav>
  );
}

export default NavBar;
