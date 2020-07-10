import React from 'react';
import { connect } from 'react-redux';
import TravelItem from 'components/TravelItem';

import styled from 'styled-components';




const Wrapper = styled.div`
  display: flexbox;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const WrapperItem = styled.div`
  width: 33%;
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
          pageType="travel"
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
