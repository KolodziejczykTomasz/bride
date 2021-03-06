import React, { Component } from 'react';
import { connect } from 'react-redux';
import FairItem from 'components/molecules/FairItem';

import styled from 'styled-components';

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

class FairBar extends Component {
  state = { date: new Date() };

  render() {
    const { fair } = this.props;
    return (
      <Wrapper>
        {fair
          // .filter((item) => item.data < this.state.date.toLocaleDateString())
          //.sort((a, b) => b.data < a.data)
          .slice(0, 3)
          .map(({ id, url, place, data, city, description, pageType, tags }) => (
            <WrapperItem>
              <FairItem
                id={id}
                url={url}
                key={id}
                place={place}
                data={data}
                city={city}
                tags={tags}
                description={description}
                pageType={pageType}
              />
            </WrapperItem>
          ))}
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  const { fair } = state;
  return { fair };
};

export default connect(mapStateToProps)(FairBar);
