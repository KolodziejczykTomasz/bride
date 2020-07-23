import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const Subtitle = styled.h1`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  padding: 0 1.5rem;
`;

const Section = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 0.7fr;
  grid-template-rows: 1fr;
`;

const Description = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-row-gap: 3rem;
`;

const Text = styled.p`
  padding: 0 1rem;
  font-size: 1.6rem;
  line-height: 24px;
`;

const PhotoBox = styled.div``;
const Photo = styled.img`
  margin-top: 3rem;
  width: 40vw;
  max-width: 110px;
`;

const Button = styled.button`
  display: flex;
  justify-self: right;  
  width: 19rem;
  margin-right: 5rem;
  margin-bottom: 2rem;
  padding: 1.5rem 4rem;
`;

class MainBarItem extends Component {
  state = {
    redirect: false,
  };

  handleCardClick = () => this.setState({ redirect: true });

  render() {
    const { id, title, subtitle, picHeader, header, pageType } = this.props;
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={`${pageType}/${id}`} />;
    }
    return (
      <Wrapper pageType={pageType}>
        <Subtitle>{title}</Subtitle>
        <Section>
          <PhotoBox>
            <Photo src={picHeader} alt={title} />
          </PhotoBox>
          <Description>
            <Text>{subtitle}</Text>
            <Text>{header}</Text>
            <Button onClick={this.handleCardClick}>Zobacz więcej</Button>
          </Description>
        </Section>
      </Wrapper>
    );
  }
}

export default MainBarItem;
