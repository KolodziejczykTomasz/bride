import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import DressItem from 'components/DressItem';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-auto-flow: column;
  grid-column-gap: 1rem;
`;

const WrapperItem = styled.div`
  width: 100%;
`;

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};

class DressBarData extends Component {
  state = {
    pageType: 'dresses',
    id: 0,
    redirect: false,
  };

  handleCardClick = () => this.setState({ redirect: true });

  render() {
    const { id, deviceType, dress } = this.props;
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={`dresses/${id}`} />;
    }

    return (
      <Wrapper>
        <Carousel
          ssr
          partialVisbile
          deviceType={deviceType}
          itemClass="image-item"
          responsive={responsive}
          pageType="dresses"
        >
          {dress.slice(0, 7).map(({ id, url, name, model, tags, description }) => {
            return (
              <WrapperItem>
                <DressItem
                  pageType="dresses"
                  id={id}
                  key={id}
                  url={url}
                  description={description}
                  name={name}
                  model={model}
                  tags={tags}
                />
              </WrapperItem>
            );
          })}
        </Carousel>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  const { dress } = state;
  return { dress };
};

export default connect(mapStateToProps)(DressBarData);
