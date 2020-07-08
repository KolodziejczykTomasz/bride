import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

const MainItem = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  width: 90%;
  margin: 1rem 0 1rem 0;
  border: 1px solid grey;
  height: 6rem;
  cursor: pointer;
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
        <MainItemText>
          {title}    
        </MainItemText>
      </MainItem>
    );
  }
}

export default ChurchItem;
