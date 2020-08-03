import React from 'react';
import { connect } from 'react-redux';
import MainTemplates from 'templates/MainTemplates';
import FairPostListItem from 'components/molecules/FairPostListItem';

import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto 20rem auto;
  width: 80vw;
`;

const WrapperItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 3rem;
  width: 80vw;
  margin-top: 3rem;
  margin-bottom: 3rem;
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 3rem;
  }
`;

const FairList = ({ fair }) => (
  <MainTemplates>
    <Wrapper>
      {fair.map(({ id, url, place, data, city, description, pageType, tags, category }) => (
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
            pageType={pageType}
          />
        </WrapperItem>
      ))}
    </Wrapper>
  </MainTemplates>
);

const mapStateToProps = (state) => {
  const { fair } = state;
  return { fair };
};

export default connect(mapStateToProps)(FairList);
