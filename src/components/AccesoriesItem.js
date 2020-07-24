import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Card = styled.div`
  position: relative;
`;
const CardText = styled.p``;
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
const Wrapper = styled.div`
  position: relative;
  height: 30rem;
  margin-bottom: 10rem;
  cursor: pointer;
  transition: 0.5s;
  :hover {
    scale: 1;
    z-index: 999;
  }
`;
const CardHeroTextTitle = styled.p`
  display: block;
  text-align: center;
  margin: 12% auto;
  font-size: 2.2rem;
`;

const ImageItem = styled.img`
  display: block;
  width: 100%;
  height: 28rem;
  padding: 5px 5px;
  margin: 0 auto;
  :hover {
    scale: 1.1;
    z-index: 999;
    filter: blur(2px);
  }
`;

class AccesoriesItem extends Component {
  state = {
    redirect: false,
  };

  handleCardClick = () => this.setState({ redirect: true });

  render() {
    const { id, pageType, url, name } = this.props;
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={`${pageType}/${id}`} />;
    }

    return (
      <Wrapper className="card">
        <Card class="card-content" onClick={this.handleCardClick}>
          <CardText className="title">
            <ImageItem src={url} alt={name} />
          </CardText>
        </Card>
        <CardHeroText>
          <CardHeroTextTitle>{name}</CardHeroTextTitle>
        </CardHeroText>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  const { accesories } = state;
  return { accesories };
};

export default connect(mapStateToProps)(AccesoriesItem);



