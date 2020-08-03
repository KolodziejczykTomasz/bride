import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import styled from 'styled-components';

const Wrapper = styled.div`
  cursor: pointer;
  transition: 0.5s;
  :hover {
    scale: 1.1;
    z-index: 999;
  }
`;

const CardImgWrapper = styled.div`
  width: 40%;
  margin: 15px auto;
`;

class FairItem extends Component {
  state = {
    redirect: false,
  };

  handleCardClick = () => this.setState({ redirect: true });

  render() {
    const { id, url, city, data, place, pageType} = this.props;
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={`${pageType}/${id}`} />;
    }
    return (
      <Wrapper>
        <Card onClick={this.handleCardClick}>
          <CardImgWrapper>
            <CardImg src={url} alt={city} />
          </CardImgWrapper>
          <hr />
          <CardBody>
            <CardText>{place}</CardText>
            <CardTitle>
              {city} - {data}
            </CardTitle>
            <Button>Więcej</Button>
          </CardBody>
        </Card>
      </Wrapper>
    );
  }
}
const mapStateToProps = (state) => {
  const { fair } = state;
  return { fair };
};

export default connect(mapStateToProps)(FairItem);
