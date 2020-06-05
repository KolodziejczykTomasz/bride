import React from 'react';
import PressItem from './PressItem';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
`;

const PressBar = () => (
  <Wrapper>
    <di>
      <PressItem />
    </di>
  </Wrapper>
);

export default PressBar;
