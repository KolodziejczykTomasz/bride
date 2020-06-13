import React from 'react';
import ExtrasItem from './ExtrasItem';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flexbox;
  justify-content: space-between;  
`;

const WrapperItem = styled.div`
  width: 24%;
`;

const ExtrasBar = () => (
    <Wrapper>
        <WrapperItem>
            <ExtrasItem />
        </WrapperItem>
        <WrapperItem>
            <ExtrasItem />
        </WrapperItem>
        <WrapperItem>
            <ExtrasItem />
        </WrapperItem>
        <WrapperItem>
            <ExtrasItem />
        </WrapperItem>
    </Wrapper>
);

export default ExtrasBar;
