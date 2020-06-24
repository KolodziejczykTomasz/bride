import React from 'react';
import Travel from '../data/Travel';
import TravelItem from './TravelItem';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flexbox;
  justify-content: space-between;
`;

const WrapperItem = styled.div`
  width: 33%;
`;

const TravelBar = () => (
  <Wrapper>
    {Travel.map(({ id, url, pleace, price, description }) => (
      <WrapperItem>
        <TravelItem id={id} url={url} key={id} pleace={pleace} description={description} />
      </WrapperItem>
    ))}
  </Wrapper>
);

export default TravelBar;
