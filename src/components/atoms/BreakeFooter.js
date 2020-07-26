import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  margin: 4rem 0;
`;

const WrapperItemLeft = styled.div`
  display: grid;
  grid-column-start: 1;
  grid-column-end: 6;
  margin: 1rem 0;
`;

const WrapperItemCentral = styled.div`
  display: grid;
  grid-column-start: 6;
  grid-column-end: 9;
  margin: 1rem 0;
`;
const WrapperItemRight = styled.div`
  display: grid;
  grid-column-start: 9;
  grid-column-end: 15;
  margin: 1rem 0;
`;

const WrapperText = styled.p`
  text-align: left;
  font-size: 1rem;
  font-weight: 500;
`;

const BreakeFooter = ({ children }) => (
  <Wrapper>
    <WrapperItemLeft>
      <hr />
    </WrapperItemLeft>
    <WrapperItemCentral>
      <hr />
    </WrapperItemCentral>
    <WrapperItemRight>
      <hr />
    </WrapperItemRight>
    <WrapperText>{children}</WrapperText>
  </Wrapper>
);

export default BreakeFooter;
