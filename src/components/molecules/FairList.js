import React from 'react';
import FairItem from 'components/molecules/FairItem';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1rem;
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const WrapperItem = styled.div`
  width: 100%;
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
    {targikrakow.map(({ id, url, place, data, city, description }) => (
      <WrapperItem>
        <FairItem
          id={id}
          url={url}
          key={id}
          place={place}
          data={data}
          city={city}
          description={description}
          pageType="targikrakow"
        />
      </WrapperItem>
    ))}
    {targikatowice.map(({ id, url, place, data, city, description }) => (
      <WrapperItem>
        <FairItem
          id={id}
          url={url}
          key={id}
          place={place}
          data={data}
          city={city}
          description={description}
          pageType="targikatowice"
        />
      </WrapperItem>
    ))}
    {targikielce.map(({ id, url, place, data, city, description }) => (
      <WrapperItem>
        <FairItem
          id={id}
          url={url}
          key={id}
          place={place}
          data={data}
          city={city}
          description={description}
          pageType="targikielce"
        />
      </WrapperItem>
    ))}
    {targikrakowarena.map(({ id, url, place, data, city, description }) => (
      <WrapperItem>
        <FairItem
          id={id}
          url={url}
          key={id}
          place={place}
          data={data}
          city={city}
          description={description}
          pageType="targikrakowarena"
        />
      </WrapperItem>
    ))}
    {targilodz.map(({ id, url, place, data, city, description }) => (
      <WrapperItem>
        <FairItem
          id={id}
          url={url}
          key={id}
          place={place}
          data={data}
          city={city}
          description={description}
          pageType="targilodz"
        />
      </WrapperItem>
    ))}
    {targirybnik.map(({ id, url, place, data, city, description }) => (
      <WrapperItem>
        <FairItem
          id={id}
          url={url}
          key={id}
          place={place}
          data={data}
          city={city}
          description={description}
          pageType="targirybnik"
        />
      </WrapperItem>
    ))}
    {targihalaorbita.map(({ id, url, place, data, city, description }) => (
      <WrapperItem>
        <FairItem
          id={id}
          url={url}
          key={id}
          place={place}
          data={data}
          city={city}
          description={description}
          pageType="targihalaorbita"
        />
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
