import React, { Component } from 'react';
import { connect } from 'react-redux';
import AccesoriesItem from 'components/molecules/AccesoriesItem';
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
  align-items: center;
  justify-items: center;
`;

class AccesoriesBar extends Component {
  render() {
    const { accesories } = this.props;

    return (
      <Wrapper>
        {accesories.slice(-8).map(({ id, url, title }) => (
          <WrapperItem>
            <AccesoriesItem id={id} key={title} url={url} title={title} pageType="accesories" />
          </WrapperItem>
        ))}
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  const { accesories } = state;
  return { accesories };
};

export default connect(mapStateToProps)(AccesoriesBar);
