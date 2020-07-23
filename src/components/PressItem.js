import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

const CardTitle = styled.p``;

const CardHeroText = styled.div`
  display: block;
  position: absolute;
  width: 80%;
  height: 50%;
  top: 50%;
  left: 10%;
  background-color: rgba(192, 192, 192, 0.8);
  opacity: 0;
`;
const ImageItem = styled.img`
  height: 28rem;
  filter: grayscale(80%) blur(0.5px);
  margin: 0 auto;
  @media (max-width: 600px) {
    display: flex;
    justify-self: center;
  }
  @media (min-width: 600px) {
    display: flex;
    justify-self: center;
  }
  @media (min-width: 768px) {
    display: flex;
    justify-self: center;
  }
`;
const Wrapper = styled.div`
  cursor: pointer;
  transition: 0.5s;
  :hover {
    scale: 1.1;
  }
  :hover ${CardHeroText} {
    opacity: 1;
  }
  :hover ${ImageItem} {
    filter: none;
  }
`;
const Card = styled.div`
  position: relative;
`;

const CardHeroTextTitle = styled.p`
  display: block;
  text-align: center;
  margin: 12% auto;
  font-size: 2rem;
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
        <Wrapper className="card" pageType={pageType}>
          <Card class="card-content" onClick={this.handleCardClick}>
            <CardTitle className="title">
              <ImageItem src={url} alt="press" />
            </CardTitle>
          </Card>
          <CardHeroText>
            <CardHeroTextTitle>Numer: {number}</CardHeroTextTitle>
          </CardHeroText>
        </Wrapper>    
    );
  }
}




export default PressItem;
