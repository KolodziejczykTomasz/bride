import React from 'react';
import CompanyItem from './CompanyItem';
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
      <CompanyItem />
    </WrapperItem>
    <WrapperItem>
      <CompanyItem />
    </WrapperItem>
    <WrapperItem>
      <CompanyItem />
    </WrapperItem> 
  </Wrapper>
);

export default CompanyBar;
