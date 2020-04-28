import React from 'react';
import { AiFillInstagram, AiFillPhone, AiFillMail } from 'react-icons/ai';
import PropTypes from 'prop-types';

const Contact = ({ uri }) => (
  <div className="contact">
    <div className="contact__item">
      <a href={uri}>
        <AiFillPhone
          size={24}
          color="black"
        />
      </a>
    </div>
    <div className="contact__item">
      <a href={uri}>
        <AiFillInstagram
          size={24}
          color="black"
        />
      </a>
    </div>
    <div className="contact__item">
      <a href={uri}>
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
