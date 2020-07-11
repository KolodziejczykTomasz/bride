import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Card = styled.div`
  position: relative;
`;
const CardText = styled.p`
  height: auto;
`;
const CardHeroText = styled.div`
  display: block;
  position: absolute;
  width: 80%;
  height: 50%;
  top: 50%;
  left: 10%;
  background-color: rgba(192, 192, 192, 0.8);
`;
const Wrapper = styled.div`
  height: 30rem;
  margin-bottom: 10rem;
  cursor: pointer;
  transition: 0.5s;
  :hover {
    scale: 1.1;
    z-index: 999;
  }
`;
const CardHeroTextTitle = styled.p`
  display: block;
  text-align: center;
  margin: 12% auto;
  font-size: 2rem;
`;

const ImageItem = styled.img`
  display: block;
  width: 100%;
  height: 28rem;
  padding: 5px 5px;
  margin: 0 auto;
`;

class TravelItem extends Component {
  state = {
    redirect: false,
  };

  handleCardClick = () => this.setState({ redirect: true });

  render() {
    const { id, url, pleace, pageType } = this.props;
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={`${pageType}/pleace/${id}`} />;
    }

    return (
      <Wrapper className="card" onClick={this.handleCardClick}>
        <Card class="card-content">
          <CardText className="title">
            <ImageItem src={url} alt={pleace} />
          </CardText>
        </Card>
        <CardHeroText>
          <CardHeroTextTitle>{pleace}</CardHeroTextTitle>
        </CardHeroText>      
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  const { travel } = state;
  return { travel };
};

export default connect(mapStateToProps)(TravelItem);
