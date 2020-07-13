import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MainTemplates from 'templates/MainTemplates';
import styled from 'styled-components';

const Button = styled.a`
  display: grid;
  position: fixed;
  width: 80px;
  height: 80px;
  justify-content: center;
  align-content: center;
  color: black;
  background-color: lightgray;
  border-radius: 50px;
  bottom: 220px;
  right: 40px;
  :hover {
    text-decoration-line: none;
    color: white;
  }
`;

class CompaniesPost extends Component {
  render() {
    const { title, subtitle, url, pageType, description, price, city } = this.props;
    return (
      <MainTemplates pageType={pageType}>
        <div>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <div>
            <img src={url} alt={title} />
          </div>
          <div>{description}</div>
          <ul>
            <li>Cena: {price}</li>
            <li>Miasto: {city}</li>
          </ul>
          <Button as={Link} to={`/`}>
            Close
          </Button>
        </div>
      </MainTemplates>
    );
  }
}

export default CompaniesPost;
