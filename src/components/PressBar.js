import React from 'react';
import PressItem from './PressItem';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flexbox;
  justify-content: space-between;  
`;

const WrapperItem = styled.div`
  width: 24%;
`;

const PressBar = () => (
  <Wrapper>
    <WrapperItem>
      <PressItem />
    </WrapperItem>
    <WrapperItem>
      <PressItem />
    </WrapperItem>
    <WrapperItem>
      <PressItem />
    </WrapperItem>
    <WrapperItem>
      <PressItem />
    </WrapperItem>  
  </Wrapper>
);

export default PressBar;
