import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  height: 7rem;
  margin: 6rem 0 6rem 0;
`;

const SocialBox = styled.div`
  display: flexbox;
  width: 40px;
  height: 40px;
  margin: auto auto;
  cursor: pointer;
  :hover {
    background-color: orange;
  border-radius: 23px;
  }
`;

const SocialMediaBar = () => (
  <Wrapper>
    <SocialBox>
      <FaFacebook style={{ fontSize: 40 }} />
    </SocialBox>
  </Wrapper>
);

export default SocialMediaBar;
