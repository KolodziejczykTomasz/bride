import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import BreakeHeader from 'components/atoms/BreakeHeader';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  height: 7rem;
  margin: 6rem 0 12rem 0;
`;

const SocialBox = styled.div`
  display: flexbox;
  width: 60px;
  height: 60px;
  margin: auto auto;
  cursor: pointer;
  :hover {
    background-color: #D8C6EE;
    border-radius: 28px;
  }
`;

const SocialMediaBar = () => (
  <Wrapper>  
    <BreakeHeader><SocialBox><FaFacebook style={{ fontSize: 60 }} /></SocialBox></BreakeHeader> 
  </Wrapper>
);

export default SocialMediaBar;
