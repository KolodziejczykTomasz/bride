import React from 'react';
import { connect } from 'react-redux';
import TravelItem from 'components/molecules/TravelItem';

import styled from 'styled-components';




const Wrapper = styled.div`
  display: grid;
  width: 100%;
  margin: 0 auto;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-column-gap: 1%;
    grid-row-gap: 1%;
    
  }

  @media (min-width: 481px) and (max-width: 766px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 767px) and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media (min-width: 1281px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    max-width: 1281px;
  }
`;

const WrapperItem = styled.div`
  width: 100%;
`;

const TravelBar = ({travel}) => (
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
          pageType="travels"
        />
      </WrapperItem>
    ))}
  </Wrapper>
);

const mapStateToProps = (state) => {
  const { travel } = state;
  return { travel };
};

export default connect(mapStateToProps)(TravelBar);
