import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  background-color: white;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
  color: #4a4a4a;
  max-width: 100%;
`;

const FooterWrapperMultibox = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(3, 1fr);
`;

const FooterWrapperSingleboxFirst = styled.div``;

const FooterWrapperSingleboxSecond = styled.div``;

const FooterWrapperSingleboxThird = styled.div``;

const FooterWrapperCopyright = styled.div`
  grid-template-rows: 1fr;
  grid-template-columns: repeat(1, 1fr);
`;

const FooterWrapperCopyrightText = styled.p`
  text-align: center;
  line-height: 3rem;
`;

const FooterTitle = styled.h1`
  margin: 2rem 0 2rem 1rem;
`;

const FooterListLink = styled.ul``;

const FooterItemLink = styled.li`
  margin-left: 2.5rem;
`;

const Footer = () => (
  <FooterWrapper>
    <FooterWrapperMultibox>
      <FooterWrapperSingleboxFirst>
        <FooterTitle>Panna Młoda</FooterTitle>
        <FooterListLink>
          <FooterItemLink>
            <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/hairtop">
              Fryzury na 2020
            </NavLink>
          </FooterItemLink>
        </FooterListLink>
      </FooterWrapperSingleboxFirst>
      <FooterWrapperSingleboxSecond>
        <FooterTitle>Atrakcje weselne</FooterTitle>
        <FooterListLink>
          <FooterItemLink>
            <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/extras/post1">
              post 1
            </NavLink>
          </FooterItemLink>
          <FooterItemLink>
            <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/extras/post2">
              post 2
            </NavLink>
          </FooterItemLink>
          <FooterItemLink>
            <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/extras/post3">
              post 3
            </NavLink>
          </FooterItemLink>
          <FooterItemLink>
            <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/extras/post4">
              post 4
            </NavLink>
          </FooterItemLink>
        </FooterListLink>
      </FooterWrapperSingleboxSecond>
      <FooterWrapperSingleboxThird>
        <FooterTitle>Przygotowania </FooterTitle>
        <FooterListLink>
          <FooterItemLink>
            <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/church">
              Czytania w Kościele
            </NavLink>
          </FooterItemLink>
          <FooterItemLink>
            <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/travel">
              Podróż poślubna
            </NavLink>
          </FooterItemLink>
        </FooterListLink>
      </FooterWrapperSingleboxThird>
    </FooterWrapperMultibox>
    <FooterWrapperCopyright>
      <FooterWrapperCopyrightText>Copyright &copy; ATOM</FooterWrapperCopyrightText>
    </FooterWrapperCopyright>
  </FooterWrapper>
);

export default Footer;
