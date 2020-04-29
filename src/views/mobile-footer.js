import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome, AiTwotoneMail } from 'react-icons/ai';
import { GiKnifeFork } from 'react-icons/gi';
import { MdRoomService } from 'react-icons/md';

import text from '../constants/english.json';

const renderIcon = (button) => {
  switch (button) {
    case ('services'):
      return (
        <MdRoomService
          color="black"
          size={18}
        />
      )
    case ('contact'):
      return (
        <AiTwotoneMail
          color="black"
          size={18}
        />
      )
    case ('menu'):
      return (
        <GiKnifeFork
          color="black"
          size={18}
        />
      )
    default:
      return (
        <AiFillHome
          color="black"
          size={18}
        />)
  }
}

const NavBar = () => {
  return (
    <nav className="mobile-footer">
      <div className="mobile-footer__buttons">
        {text.navigation.routes.map((button) => {
          return (
            <Link className="mobile-footer__buttons__link" to={`/${button}`} key={button}>
              {renderIcon(button)}
              <p className="mobile-footer__buttons__button"  style={{ margin: '0 14px', fontSize: '10px' }}>{button}</p>
            </Link>
          )}
        )}
      </div>
    </nav>
  );
}

export default NavBar;
