import React from 'react';
import styled from 'styled-components';
import suknia from '../assets/images/main/suknia.jpg'

const Card = styled.div`
display: flex;
flex-shrink: 1;
width: 100%;
max-height: 53.6rem;
`;
const CardImg = styled.img`
width: 40%;
padding: 2rem 2rem;
`;
const CardBody = styled.div``;
const CardTitle = styled.h1`
  margin-top: 2rem;
  padding: 0 1.5rem;
`;
const CardSubtitle = styled.h2`
  padding: 0 1.5rem;
`;
const CardText = styled.p`
padding: 1.5rem 1.5rem;
`;
const Button = styled.button`
  float: right;
  margin-top: 2rem;
  margin-right: 5rem;
  padding: 0.2rem 1rem;
`;

const MainBarHero = () => (
  <Card>
    <CardImg top width="100%" src={suknia} alt="Card image cap" />
    <CardBody>
      <CardTitle>Card title</CardTitle>
      <CardSubtitle>Card subtitle</CardSubtitle>
      <CardText>
        Some quick example text to build on the card title and make up the bulk of the card's
        content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis consectetur quasi unde molestiae laborum, aliquam reiciendis officiis repellat numquam doloremque iste, nulla exercitationem cum, ab soluta incidunt consequuntur eum a. Eum architecto iusto a nemo odit debitis perferendis ducimus iure vel dolore voluptates corporis laboriosam illum distinctio facere maiores, soluta modi officiis nesciunt dicta animi. Provident, minus praesentium neque quia harum laudantium eveniet in repudiandae id quibusdam commodi debitis ut beatae inventore consectetur pariatur! Commodi necessitatibus rem vero magni ipsum.
      </CardText>
      <Button>Button</Button>
    </CardBody>
  </Card>
);

export default MainBarHero; 