import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import styled from 'styled-components';

const Wrapper = styled.div``;

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
