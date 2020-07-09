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

class AccesoriesPost extends Component {
  render() {
    const { title, subtitle, pageType } = this.props;
    return (
      <MainTemplates pageType={pageType}>
        <div>
          <div>{title}</div>
          <div>{subtitle}</div>

          <Button as={Link} to={`/`}>
            Close
          </Button>
        </div>
      </MainTemplates>
    );
  }
}

export default AccesoriesPost;
