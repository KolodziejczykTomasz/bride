import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 5rem;
`;

const Title = styled.h1`
  display: block;
  margin: 3rem 0 3rem 3rem;
`;

const Section = styled.div`
  position: relative;
  height: 100%;
  padding: 20px 40px 40px;
  cursor: pointer;
  margin-bottom: 5rem;
`;

const Text = styled.p`
  display: inline;
`;

const Photo = styled.img`
  width: 100px;
  margin: 5px 30px 0 0;
  float: left;
`;

class MainBarItem extends Component {
  state = {
    redirect: false,
  };

  handleCardClick = () => this.setState({ redirect: true });

  render() {
    const { id, title, header, picHeader, pageType } = this.props;
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={`${pageType}/${id}`} />;
    }
    return (
      <Wrapper pageType={pageType}>
        <Title>{title}</Title>
        <Section onClick={this.handleCardClick}>
          <Photo src={picHeader} alt={title} />
          <Text>{header}</Text>
        </Section>
      </Wrapper>
    );
  }
}

export default MainBarItem;
