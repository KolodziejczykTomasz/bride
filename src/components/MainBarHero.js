import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MainTemplates from 'templates/MainTemplates';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(auto 1fr);
`;

const PhotoBox = styled.div`
  margin-top: 1rem;
  width: 100%;
`;

const Photo = styled.img`
  display: block;
  width: 65%;
  margin: auto auto;
  border: 1px solid #d2d0d0;
  box-shadow: -2px 2px 10px 0px rgba(#444, 0.4);
`;

const Description = styled.div`
  width: 100%;
`;

const Title = styled.h1`
  margin: 3rem 0 1rem 0;
  padding: 0 1rem;
`;
const Subtitle = styled.h2`
  padding: 0 1rem;
`;
const Text = styled.p`
  padding: 0 1.5rem;
  font-size: 1.6rem;
  line-height: 24px;
`;
const Button = styled.button`
  display: flex;
  justify-self: right;
  width: 19rem;
  margin-right: 5rem;
  margin-bottom: 2rem;
  padding: 1.5rem 4rem;
`;

class MainBarHero extends Component {
  state = {
    redirect: false,
  };

  handleCardClick = () => this.setState({ redirect: true });

  render() {
    const { id, title, subtitle, header, picHeader, pageType, extras } = this.props;
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={`${pageType}/${id}`} />;
    }
    return (
      <MainTemplates>
        <Description>
          <Title>{title}</Title>
          <Subtitle>
            <hr />
          </Subtitle>
        </Description>
        <Wrapper pageType={extras}>
          <PhotoBox>
            <Photo src={picHeader} alt={title} />
          </PhotoBox>
          <Description>
            <Text>{subtitle}</Text>
            <Text>{header}</Text>
            <Button onClick={this.handleCardClick}>Zobacz więcej</Button>
          </Description>
        </Wrapper>
      </MainTemplates>
    );
  }
}

export default MainBarHero;
