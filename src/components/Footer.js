import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div``;

const FooterWrapperMultibox = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(3, 1fr);
`;

const FooterWrapperSingleboxFirst = styled.div`
  background-color: #813030;
`;

const FooterWrapperSingleboxSecond = styled.div`
  background-color: #818181;
`;

const FooterWrapperSingleboxThird = styled.div`
  background-color: #819090;
`;

const FooterWrapperCopyright = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(1, 1fr);
  background-color: #808080;
`;

const Footer = () => (
  <FooterWrapper>
    <FooterWrapperMultibox>
      <FooterWrapperSingleboxFirst>1</FooterWrapperSingleboxFirst>
      <FooterWrapperSingleboxSecond>2</FooterWrapperSingleboxSecond>
      <FooterWrapperSingleboxThird>3</FooterWrapperSingleboxThird>
    </FooterWrapperMultibox>
    <FooterWrapperCopyright>Copyright &copy; ATOM</FooterWrapperCopyright>
  </FooterWrapper>
);

export default Footer;
