import React from 'react';
import FairItem from './FairItem';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flexbox;
  justify-content:space-between;
`;

const WrapperItem = styled.div`
  width: 33%;
  
`;

const CompanyBar = () => (
  <Wrapper>
    <WrapperItem>
      <FairItem />
    </WrapperItem>
    <WrapperItem>
      <FairItem />
    </WrapperItem>
    <WrapperItem>
      <FairItem />
    </WrapperItem> 
  </Wrapper>
);

export default CompanyBar;
