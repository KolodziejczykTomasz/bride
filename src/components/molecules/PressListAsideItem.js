import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

const AsideContainer = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
`;

const AsideCityList = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  text-transform: uppercase;
  border: 1px solid rgba(10, 10, 10, 0.1);
  :hover {
    color: orange;
    cursor: pointer;
    box-shadow: 0 2px 4px #777;
  }
`;

const Title = styled.div``;
const Number= styled.div``;


class PressListAsideItem extends Component {
  state = {
    redirect: false,
  };

  handleCardClick = () => this.setState({ redirect: true });

  render() {
    const { id, pageType, title, number } = this.props;
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={`${pageType}/${id}`} />;
    }
    return (
      <AsideContainer pageType={pageType} onClick={this.handleCardClick}>
        <AsideCityList>
          <Title>{title}</Title>
          <Number>{number}</Number>
        </AsideCityList>
      </AsideContainer>
    );
  }
}

export default PressListAsideItem;
