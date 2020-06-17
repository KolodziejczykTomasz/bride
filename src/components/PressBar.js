import React from 'react';
import PressItem from './PressItem';
import styled from 'styled-components';
import press from '../data/press';

const Wrapper = styled.div`
  display: flexbox;
  justify-content: space-between;  
`;

const WrapperItem = styled.div`
  width: 24%;
`;



const PressBar = ({mlodapara}) => (

  <Wrapper>
    {mlodapara.map(
      ({
        id,
        url,
        title,
        number
      }) => (
          <WrapperItem>
          <PressItem
            id={id}
            url={url}
            key={id}
            title={title}
            number={number}            
            />
          </WrapperItem>
        )
    )}
    
  </Wrapper>
);

export default PressBar;
