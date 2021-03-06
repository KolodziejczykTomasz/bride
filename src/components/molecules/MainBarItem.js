import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import styled from 'styled-components';

const Wrapper = styled.div`
 
`;

const Title = styled.h1`
  display: block;
  padding: 2rem 0 .5rem 1rem;
`;

const Section = styled.div`
  height: 100%;
  cursor: pointer;
  margin-bottom: 2rem;
  transition: 0.5s;
`;

const PhotoBox = styled.div`
  width: 100%;
  height: 300px;
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

class MainBarItem extends Component {
  state = {
    redirect: false,
  };

  handleCardClick = () => this.setState({ redirect: true });

  render() {
    const { id, title, picHeader, pageType } = this.props;
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={`${pageType}/${id}`} />;
    }
    return (
      <Wrapper pageType={pageType}>
        <Section onClick={this.handleCardClick}>
          <PhotoBox><Photo src={picHeader} alt={title} /></PhotoBox>          
          <Title>{title}</Title>
        </Section>
      </Wrapper>
    );
  }
}

export default MainBarItem;
