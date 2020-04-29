import React from 'react';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import text from '../constants/english.json';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__copyright">
        <AiOutlineCopyrightCircle
          color="black"
          size={14}
        />
        <span>
        {text.footer.copyright}
        </span>
      </div>
      <div className="footer__copyright">
        <Link className="footer__copyright__contact">
          {text.footer.contact}
        </Link>
        <span>{'  |  '}</span>
        <Link className="footer__copyright__instagram">
          {text.footer.instagram}
        </Link>
      </div>
    </div>
  )
};

export default Footer;
