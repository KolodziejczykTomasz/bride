import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  height: 30rem;
  cursor: pointer;
  transition: 0.5s;
  border: 1px solid black;
  transition: 0.5s;
  :hover {
    scale: 1.1;
    z-index: 999;
  }
`;

const Card = styled.div`
  position: relative  
`;

const CardHeroTextTitle = styled.p`
  display: block;
  text-align: center;
  margin: 12% auto;
  font-size: 2.2rem;
`;

const CardHeroText = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  text-decoration: none;
  z-index: 1;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.5s;
  background: rgba(90, 0, 10, 0.4);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    opacity: 1;
  }
`;

const PhotoBox = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const ImageItem = styled.img`
display: block;
  width: 100%;
  height: 100%;
  max-height: 28rem;
  object-fit: cover;
  padding: 5px 5px;
  margin: 0 auto;
  :hover {
    scale: 1.2;
    z-index: 999;
    filter: blur(2px);
  }
  @media (max-width: 600px) {
  }
  @media (min-width: 600px) {
  }
  @media (min-width: 768px) {
    width: 80%;
    margin: 0 auto;
  }
  @media (min-width: 992px) {
    width: 80%;
    max-height: 28rem;
    object-fit: cover;
    margin: 0 auto;
  }
  @media (min-width: 1024px) {
    width: 80%;
    max-height: 28rem;
    object-fit: cover;
    margin: 0 auto;
  }
  @media (min-width: 1224px) {
    width: 100%;
    height: 100%;
    max-height: 28rem;
    object-fit: cover;
    margin: 0 auto;
  }
`;

class PressItem extends Component {
  state = {
    redirect: false,
  };

  handleCardClick = () => this.setState({ redirect: true });

  render() {
    const { id, url, number, pageType } = this.props;
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={`${pageType}/${id}`} />;
    }

    return (
      <Wrapper pageType={pageType} onClick={this.handleCardClick}>
        <Card>
          <PhotoBox>
            <ImageItem src={url} alt="press" />
          </PhotoBox>
        </Card>
        <CardHeroText>
          <CardHeroTextTitle>Numer: {number}</CardHeroTextTitle>
        </CardHeroText>
      </Wrapper>
    );
  }
}

export default PressItem;
