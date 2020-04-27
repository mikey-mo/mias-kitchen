import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  padding: 20px 40px;
  margin: 0 4px;
  &:hover {
    background-color: lightgrey;
    cursor: pointer;
  }
`;

const Text = styled.p`
  padding: 0;
  margin: 0;
`;

const NavButton = ({ title }) => (
  <Container>
    <Text>{title}</Text>
  </Container>
);

export default NavButton;

NavButton.propTypes = {
  title: PropTypes.string,
};
