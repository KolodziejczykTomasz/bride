import React from 'react';
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

const CompanyItem = ({ url, city, data, place }) => {
  return (
    <Wrapper>
      <Card>
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
};

export default CompanyItem;
