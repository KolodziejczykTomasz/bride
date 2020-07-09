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

class MainPost extends Component {
  render() {
    const {
      title,
      subtitle,
      picHero,
      pageType,
      p1,
      p2,
      p3,
      p4,
      p5,
      p6,
      p7,
      p8,
      p9,
      p10,
      p11,
      pic1,
      pic2,
      pic3,
      pic4,
      pic5,
      pic6,
      pic7,
      pic8,
      pic9,
      pic10
    } = this.props;
    return (
      <MainTemplates pageType={pageType}>
        <div>
          <div>{title}</div>
          <div>{subtitle}</div>
          <div>{picHero}</div>
          <div>{p1}</div>
          <img src={pic1} alt={title} />
          <div>{p2}</div>
          <img src={pic2} alt={title} />
          <div>{p3}</div>
          <img src={pic3} alt={title} />
          <div>{p4}</div>
          <img src={pic4} alt={title} />
          <div>{p5}</div>
          <img src={pic5} alt={title} />
          <div>{p6}</div>
          <img src={pic6} alt={title} />
          <div>{p7}</div>
          <img src={pic7} alt={title} />
          <div>{p8}</div>
          <img src={pic8} alt={title} />
          <div>{p9}</div>
          <img src={pic9} alt={title} />
          <div>{p10}</div>
          <img src={pic10} alt={title} />
          <div>{p11}</div>
          <Button as={Link} to={`/`}>
            Close
          </Button>
        </div>
      </MainTemplates>
    );
  }
}

export default MainPost;
