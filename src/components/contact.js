import React from 'react';
import styled from 'styled-components';
import { AiFillInstagram, AiFillPhone, AiFillMail } from 'react-icons/ai';
import PropTypes from 'prop-types';

const ContactContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  
  padding: 20px 0;
  right: 0;
  top: 0;
`;

const ContactItem = styled.div`
  margin-right: 10px;
  opacity: 0.2;

  &:hover {
    opacity: 0.4;
    cursor: pointer;
  }
`;

const Contact = ({ uri }) => (
  <ContactContainer>
    <ContactItem>
      <a href={uri}>
        <AiFillPhone
          size={24}
          color="black"
        />
      </a>
    </ContactItem>
    <ContactItem>
      <a href={uri}>
        <AiFillInstagram
          size={24}
          color="black"
        />
      </a>
    </ContactItem>
    <ContactItem>
      <a href={uri}>
        <AiFillMail
          size={24}
          color="black"
        />
      </a>
    </ContactItem>
  </ContactContainer>
);

export default Contact;

Contact.propTypes = {
  uri: PropTypes.string,
};
