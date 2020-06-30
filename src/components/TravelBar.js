import React from 'react';
import TravelItem from './TravelItem';

import styled from 'styled-components';

import travel from 'data/travel/travel';


const Wrapper = styled.div`
  display: flexbox;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const WrapperItem = styled.div`
  width: 33%;
`;

const TravelBar = () => (
  <Wrapper>
    {travel.map(({ id, url, pleace, price, description }) => (
      <WrapperItem>
        <TravelItem
          id={id}
          url={url}
          key={id}
          pleace={pleace}
          description={description}
          price={price}
        />
      </WrapperItem>
    ))}
  </Wrapper>
);

export default TravelBar;
