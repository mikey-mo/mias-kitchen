import React from 'react';
import styled from 'styled-components';

const BodyContainer = styled.section`
  width: 100%;
  height: 1600px;
  padding: 0;
  display: flex;
  flex-direction: row;
`;

const BodyColumn = styled.div`
  text-align: center;
`;

const BodyRow = styled.div`
  width: 100%;
  background-color: purple;
`;

const Body = () => (
  <BodyContainer>
    <BodyRow>
      <BodyColumn>Hey</BodyColumn>
      <BodyColumn>Hey</BodyColumn>
    </BodyRow>
    <BodyRow>
      <BodyColumn>Hey</BodyColumn>
      <BodyColumn>Hey</BodyColumn>
    </BodyRow>
  </BodyContainer>
);

export default Body;
