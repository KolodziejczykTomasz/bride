import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import styled from 'styled-components';
import fairLogo from '../assets/images/fair/kielce.png';

const Wrapper = styled.div``;

const CardImgWrapper = styled.div`
  width: 40%;
  margin: 15px auto;
`;

const CompanyItem = (props) => {
  return (
    <Wrapper>
      <Card>
        <CardImgWrapper>
          <CardImg src={fairLogo} alt="Card image cap" />
        </CardImgWrapper>
        <hr />
        <CardBody>
          <CardTitle>Kraków </CardTitle>
          <CardSubtitle>11.10.2020</CardSubtitle>
          <CardText>Tauron Arena Kraków</CardText>
          <Button>Więcej</Button>
        </CardBody>
      </Card>
    </Wrapper>
  );
};

export default CompanyItem;
