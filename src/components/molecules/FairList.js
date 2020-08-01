import React from 'react';
import { connect } from 'react-redux';
import MainTemplates from 'templates/MainTemplates';
import FairPostListItem from 'components/molecules/FairPostListItem';

import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 20rem;
`;

const WrapperItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 3rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 3rem;
  }
`;

const FairList = ({
  targikrakow,
  targikatowice,
  targikielce,
  targikrakowarena,
  targilodz,
  targirybnik,
  targihalaorbita,
}) => (
  <MainTemplates>
    <Wrapper>
      {targikrakow.map(({ id, url, place, data, city, description, tags, category }) => (
        <WrapperItem>
          <FairPostListItem
            id={id}
            url={url}
            key={id}
            place={place}
            data={data}
            city={city}
            tags={tags}
            category={category}
            description={description}
            pageType="targikrakow"
          />
        </WrapperItem>
      ))}
      {targikatowice.map(({ id, url, place, data, city, description, tags, category }) => (
        <WrapperItem>
          <FairPostListItem
            id={id}
            url={url}
            key={id}
            place={place}
            data={data}
            city={city}
            tags={tags}
            description={description}
            category={category}
            pageType="targikatowice"
          />
        </WrapperItem>
      ))}
      {targikielce.map(({ id, url, place, data, city, description, tags, category }) => (
        <WrapperItem>
          <FairPostListItem
            id={id}
            url={url}
            key={id}
            place={place}
            data={data}
            city={city}
            tags={tags}
            description={description}
            category={category}
            pageType="targikielce"
          />
        </WrapperItem>
      ))}
      {targikrakowarena.map(({ id, url, place, data, city, description, tags, category }) => (
        <WrapperItem>
          <FairPostListItem
            id={id}
            url={url}
            key={id}
            place={place}
            data={data}
            city={city}
            tags={tags}
            description={description}
            category={category}
            pageType="targikrakowarena"
          />
        </WrapperItem>
      ))}
      {targilodz.map(({ id, url, place, data, city, description, tags, category }) => (
        <WrapperItem>
          <FairPostListItem
            id={id}
            url={url}
            key={id}
            place={place}
            data={data}
            city={city}
            tags={tags}
            description={description}
            category={category}
            pageType="targilodz"
          />
        </WrapperItem>
      ))}
      {targirybnik.map(({ id, url, place, data, city, description, tags, category }) => (
        <WrapperItem>
          <FairPostListItem
            id={id}
            url={url}
            key={id}
            place={place}
            data={data}
            city={city}
            tags={tags}
            description={description}
            category={category}
            pageType="targirybnik"
          />
        </WrapperItem>
      ))}
      {targihalaorbita.map(({ id, url, place, data, city, description, tags, category }) => (
        <WrapperItem>
          <FairPostListItem
            id={id}
            url={url}
            key={id}
            place={place}
            data={data}
            city={city}
            tags={tags}
            description={description}
            category={category}
            pageType="targihalaorbita"
          />
        </WrapperItem>
      ))}
    </Wrapper>
  </MainTemplates>
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

export default connect(mapStateToProps)(FairList);
