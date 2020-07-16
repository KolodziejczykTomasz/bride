import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import FooterItem from 'components/FooterItem';

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
  line-height: 7rem;
`;

const FooterTitle = styled.h1`
  margin: 2rem 0 2rem 1rem;
`;

const FooterListLink = styled.ul``;

const FooterItemLink = styled.li`
  margin-left: 2.5rem;
`;

const Footer = ({ extras, postextras, brides, postbride }) => (
  <FooterWrapper>
    <FooterWrapperMultibox>
      <FooterWrapperSingleboxFirst>
        <FooterTitle>Panna Młoda</FooterTitle>
        <FooterListLink>
          <FooterItemLink pageType={brides}>
            {postbride.slice(0, 3).map(({ id, title, subtitle, picHeader }) => (
              <FooterItem
                id={id}
                key={id}
                title={title}
                subtitle={subtitle}
                picHeader={picHeader}
                pageType="brides"
              />
            ))}
          </FooterItemLink>
        </FooterListLink>
      </FooterWrapperSingleboxFirst>
      <FooterWrapperSingleboxSecond>
        <FooterTitle>Dekoracje, dodatki</FooterTitle>
        <FooterListLink>
          <FooterItemLink pageType={extras}>
            {postextras.slice(0, 3).map(({ id, title, subtitle, picHero }) => (
              <FooterItem
                id={id}
                key={id}
                title={title}
                subtitle={subtitle}
                picHero={picHero}
                pageType="extras"
              />
            ))}
          </FooterItemLink>
        </FooterListLink>
      </FooterWrapperSingleboxSecond>
      <FooterWrapperSingleboxThird>
        <FooterTitle>Przygotowania </FooterTitle>
        <FooterListLink>
          <FooterItemLink>
            <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/churchs">
              Czytania w Kościele
            </NavLink>
          </FooterItemLink>
          <FooterItemLink>
            <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/travels">
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

const mapStateToProps = (state) => {
  const { postextras, postbride } = state;
  return { postextras, postbride };
};

export default connect(mapStateToProps)(Footer);
