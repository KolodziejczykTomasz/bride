import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

const MainItem = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr 1fr 1fr);
  grid-column-gap: 1rem;
  width: 90%;
  margin: 1rem 0 1rem 0;
  border: 1px solid grey;
  height: 6rem;
  margin: 0 auto;
  cursor: pointer;
  :hover  {
    background-color: #6c44a2;
    color: white;
  }
`;

const MainItemText = styled.span`
  display: block;
  margin: auto auto;
`;

class ChurchItem extends Component {
  state = {
    redirect: false,
  };

  handleCardClick = () => this.setState({ redirect: true });

  render() {
    const { id, title, pageType } = this.props;
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={`${pageType}/${id}`} />;
    }
    return (
      <MainItem pageType={pageType} onClick={this.handleCardClick}>
        <MainItemText>{title}</MainItemText>
      </MainItem>
    );
  }
}

export default ChurchItem;
