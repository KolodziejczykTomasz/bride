import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  margin: 3rem 0;
`;

const WrapperItemLeft = styled.div`
  display: grid;
  grid-column-start: 1;
  grid-column-end: 6;
`;

const WrapperItemCentral = styled.div`
  display: grid;
  grid-column-start: 6;
  grid-column-end: 9;
`;
const WrapperItemRight = styled.div`
  display: grid;
  grid-column-start: 9;
  grid-column-end: 15;
`;

const WrapperText = styled.p`
  text-align: center;
`;

const HeaderBreake = ({children}) => (
  <Wrapper>
    <WrapperItemLeft>
      <hr />
    </WrapperItemLeft>
    <WrapperItemCentral>
      <WrapperText>{children}</WrapperText>
    </WrapperItemCentral>
    <WrapperItemRight>
      <hr />
    </WrapperItemRight>
  </Wrapper>
);

export default HeaderBreake;