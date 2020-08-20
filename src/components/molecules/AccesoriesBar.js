import React, { Component } from 'react';
import { connect } from 'react-redux';
import AccesoriesItem from 'components/molecules/AccesoriesItem';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  width: 80%;
  margin: 0 auto; 
  grid-template-rows: 1fr;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  @media (max-width: 600px) {
    grid-template-columns: 0.6fr;
    justify-content: center;
    
  }
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 0.5fr);
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 0.5fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 1224px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const WrapperItem = styled.div`
  display: grid;
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
