import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import BreakeHeader from 'components/atoms/BreakeHeader';
import BreakeFooter from 'components/atoms/BreakeFooter';

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

const Wrapper = styled.div`
  width: 80vw;
  margin: 2rem auto;
  padding: 2rem 5rem;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
`;

const Header = styled.h1`
  text-align: center;
`;
const SubHeader = styled.h2`
  text-align: center;
`;

const Section = styled.div`
  margin: 4rem 0;
`;
const SectionHeader = styled.h3`
  text-align: left;
  font-weight: 600;
`;
const SectionText = styled.p`
  font-size: 1.8rem;
  line-height: 2.4rem;
`;

const SectionFooter = styled.h3`
  text-align: left;
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
        <BreakeHeader>Kościół - czytania</BreakeHeader>
        <Wrapper>
          <Header>{title}</Header>
          <SubHeader>{subtitle}</SubHeader>
          <Section>
            <SectionHeader>{header1}</SectionHeader>
            <SectionText>{p1}</SectionText>
            <SectionText>{p2}</SectionText>
            <SectionText>{p3}</SectionText>
            <SectionText>{p4}</SectionText>
            <SectionText>{p5}</SectionText>
            <SectionText>{p6}</SectionText>
            <SectionText>{p7}</SectionText>
            <SectionText>{p8}</SectionText>
            <SectionText>{p9}</SectionText>
            <SectionText>{p10}</SectionText>
            <SectionText>{p11}</SectionText>
            <SectionText>{p12}</SectionText>
            <SectionText>{p13}</SectionText>
            <SectionText>{p14}</SectionText>
            <SectionText>{p15}</SectionText>
            <SectionText>{p16}</SectionText>
            <SectionText>{p17}</SectionText>
            <SectionText>{p18}</SectionText>
            <SectionText>{p19}</SectionText>
            <SectionText>{p20}</SectionText>
            <SectionText>{p21}</SectionText>
            <SectionText>{p22}</SectionText>
            <SectionText>{p23}</SectionText>
            <SectionText>{p24}</SectionText>
            <SectionText>{p25}</SectionText>
            <SectionText>{p26}</SectionText>
            <SectionText>{p27}</SectionText>
            <SectionText>{p28}</SectionText>
            <SectionText>{p29}</SectionText>
            <SectionText>{p30}</SectionText>
            <SectionText>{p31}</SectionText>
            <SectionText>{p32}</SectionText>
            <SectionText>{p33}</SectionText>
            <SectionFooter>{f1}</SectionFooter>
          </Section>
          <Button as={Link} to={`/${pageType}`}>
            Close
          </Button>
        </Wrapper>
        <BreakeFooter>TAGI:</BreakeFooter>
      </MainTemplates>
    );
  }
}

export default ChurchPost;
