import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
background-color: white;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
  color: #4a4a4a;
  max-width: 100%;`;

const FooterWrapperMultibox = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(3, 1fr);
`;

const FooterWrapperSingleboxFirst = styled.div`

`;

const FooterWrapperSingleboxSecond = styled.div`

`;

const FooterWrapperSingleboxThird = styled.div`

`;

const FooterWrapperCopyright = styled.div`
  grid-template-rows: 1fr;
  grid-template-columns: repeat(1, 1fr);
`;

const FooterWrapperCopyrightText = styled.p`
  text-align: center;
  line-height: 3rem;
`;

const Footer = () => (
  <FooterWrapper>
    <FooterWrapperMultibox>
      <FooterWrapperSingleboxFirst>Panna Młoda</FooterWrapperSingleboxFirst>
      <FooterWrapperSingleboxSecond>Pan Młody</FooterWrapperSingleboxSecond>
      <FooterWrapperSingleboxThird>Przygotowania</FooterWrapperSingleboxThird>
    </FooterWrapperMultibox>
    <FooterWrapperCopyright>
      <FooterWrapperCopyrightText>Copyright &copy; ATOM</FooterWrapperCopyrightText>
    </FooterWrapperCopyright>
  </FooterWrapper>
);

export default Footer;
