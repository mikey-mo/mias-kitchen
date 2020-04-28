import React from 'react';
import { AiFillInstagram, AiFillPhone, AiFillMail } from 'react-icons/ai';
import PropTypes from 'prop-types';

import text from '../constants/english.json';

const Contact = () => (
  <div className="contact">
    <div className="contact__item">
      <a href={`tel:+${text.header.contacts.tel}`}>
        <AiFillPhone
          size={24}
          color="black"
        />
      </a>
    </div>
    <div className="contact__item">
      <a href={text.header.contacts.instagram}>
        <AiFillInstagram
          size={24}
          color="black"
        />
      </a>
    </div>
    <div className="contact__item">
      <a href={`mailto:${text.header.contacts.email}?Subject=Hello!`} target="_top">
        <AiFillMail
          size={24}
          color="black"
        />
      </a>
    </div>
  </div>
);

export default Contact;

Contact.propTypes = {
  uri: PropTypes.string,
};
