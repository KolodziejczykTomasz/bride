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

class ChurchPost extends Component {
  render() {
    const {
      title,
      subtitle,
      pageType,
      header1,
      f1,
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
      p12,
      p13,
      p14,
      p15,
      p16,
      p17,
      p18,
      p19,
      p20,
      p21,
      p22,
      p23,
      p24,
      p25,
      p26,
      p27,
      p28,
      p29,
      p30,
      p31,
      p32,
      p33,
    } = this.props;
    return (
      <MainTemplates pageType={pageType}>
        <div>
          <div>{title}</div>
          <div>{subtitle}</div>
          <div>{header1}</div>
          <div>{p1}</div>
          <div>{p2}</div>
          <div>{p3}</div>
          <div>{p4}</div>
          <div>{p5}</div>
          <div>{p6}</div>
          <div>{p7}</div>
          <div>{p8}</div>
          <div>{p9}</div>
          <div>{p10}</div>
          <div>{p11}</div>
          <div>{p12}</div>
          <div>{p13}</div>
          <div>{p14}</div>
          <div>{p15}</div>
          <div>{p16}</div>
          <div>{p17}</div>
          <div>{p18}</div>
          <div>{p19}</div>
          <div>{p20}</div>
          <div>{p21}</div>
          <div>{p22}</div>
          <div>{p23}</div>
          <div>{p24}</div>
          <div>{p25}</div>
          <div>{p26}</div>
          <div>{p27}</div>
          <div>{p28}</div>
          <div>{p29}</div>
          <div>{p30}</div>
          <div>{p31}</div>
          <div>{p32}</div>
          <div>{p33}</div>
          <div>{f1}</div>
          <Button as={Link} to={`/${pageType}`}>
            Close
          </Button>
        </div>
      </MainTemplates>
    );
  }
}

export default ChurchPost;
