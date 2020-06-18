import React from 'react';
import FairItem from './FairItem';
import styled from 'styled-components';
import { connect } from 'react-redux';


const Wrapper = styled.div`
  display: flexbox;
  justify-content:space-between;
`;

const WrapperItem = styled.div`
  width: 33%;
  
`;

const FairBar = ({
  targikrakow,
  targikatowice,
  targikielce,
  targikrakowarena,
  targilodz,
  targirybnik,
  targihalaorbita,
}) => (
  <Wrapper>
    {targikrakow.map(({ id, url, place, data, city }) => (
      <WrapperItem>
        <FairItem id={id} url={url} key={id} place={place} data={data} city={city} />
      </WrapperItem>
    ))}
    {targikatowice.map(({ id, url, place, data, city }) => (
      <WrapperItem>
        <FairItem id={id} url={url} key={id} place={place} data={data} city={city} />
      </WrapperItem>
    ))}
    {targikielce.map(({ id, url, place, data, city }) => (
      <WrapperItem>
        <FairItem id={id} url={url} key={id} place={place} data={data} city={city} />
      </WrapperItem>
    ))}
  </Wrapper>
);


const mapStateToProps = (state) => {
  const {
    targikrakow,
    targikatowice,
    targikielce,
    targikrakowarena,
    targilodz,
    targirybnik,
    targihalaorbita,
  } = state;
  return {
    targikrakow,
    targikatowice,
    targikielce,
    targikrakowarena,
    targilodz,
    targirybnik,
    targihalaorbita,
  };
};

export default connect(mapStateToProps)(FairBar);
