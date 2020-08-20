import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import styled from 'styled-components';

const Card = styled.div`
  position: relative;
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
  background: rgba(108, 68, 162, 0.6);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    opacity: 1;
  }
`;
const Wrapper = styled.div`
  position: relative;  
  cursor: pointer;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
  transition: 0.5s;
  :hover {
    z-index: 999;
  }
`;
const CardHeroTextTitle = styled.p`
  display: block;
  text-align: center;
  width: 100%;
  margin: 12% auto;
  font-size: 2rem;
`;

const PhotoBox = styled.div`
  width: 100%;
`;

const ImageItem = styled.img`
  display: block;
  width: 100%;
  height: auto;
  padding: 5px 5px;
  margin: 0 auto;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
  :hover {
    z-index: 999;
    filter: blur(2px);
  }
`;

class DressItem extends Component {
  state = {
    redirect: false,
  };

  handleCardClick = () => this.setState({ redirect: true });

  render() {
    const { id, url, pageType, name } = this.props;
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={`${pageType}/${id}`} />;
    }
    return (
      <Wrapper onClick={this.handleCardClick}>
        <Card>
          <PhotoBox>
            <ImageItem
              pageType="dresses"
              id={id}
              key={id}
              draggable={false}
              style={{ width: '96%', height: '90%', cursor: 'pointer' }}
              src={url}
              alt={id}
            />
          </PhotoBox>
          <CardHeroText>
            <CardHeroTextTitle>{name}</CardHeroTextTitle>           
          </CardHeroText>
        </Card>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  const { dress } = state;
  return { dress };
};

export default connect(mapStateToProps)(DressItem);
